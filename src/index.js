import express from "express";
import dotenv from "dotenv";

import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bibleRoutes from "./routes/bibleRoutes.js";

import { connectDB } from "./lib/db.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { limiter } from "./middleware/rateLimiter.js";
import { startKeepAlive } from "./utils/serverKeepAlive.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.use(limiter);
app.use(express.json());
app.use(cors());
app.use(helmet()); //helmet is a security middleware that sets various HTTP headers to help protect your app from common web vulnerabilities
app.use(morgan(NODE_ENV === "development" ? "dev" : "combined"));

// Routes endpoints
//---------------------------------------------------------------------
app.use("/api/bible/v1", bibleRoutes);
//---------------------------------------------------------------------
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Bible API is running!",
    timestamp: new Date().toISOString(),
  });
});

//Handle 404 - Route not found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req?.originalUrl} not found`,
  });
});

// Global error handling middleware (must be last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} and env is ${NODE_ENV}`);
  connectDB();

  // Start the keep-alive cron job (only in production)
  if (NODE_ENV === "production") {
    startKeepAlive();
  }
});
