import dotenv from "dotenv";
dotenv.config();



// Simple global error handling middleware
export const errorHandler = (err, req, res, next) => {
  // Log error for debugging
  console.error('Error:', err);
  
  // Send error response
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
};