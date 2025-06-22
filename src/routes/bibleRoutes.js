import express from "express";
import {
  getBibleBooks,
  getSpecificVerse,
  getVersesByBookIdORName,
  getVersesByGospel,
  searchVerses,
} from "../controller/bibleController.js";

const router = express.Router();

// Get all Bible books (metadata only)
router.get("/books", getBibleBooks);

// Get all verses from a specific book ID
router.get("/verses/:bookId/", getVersesByBookIdORName);

// Get all verses from a specific book name
router.get("/verses/bookName/:bookName", getVersesByBookIdORName);

// // Get all verses from a specific chapter
// router.get("/books/:bookId/chapters/:chapterNumber/verses", getVersesByChapter);
// router.get("/books/name/:bookName/chapters/:chapterNumber/verses", getVersesByChapter);

// Get a specific verse
router.get(
  "/books/:bookId/chapters/:chapterNumber/verses/:verseNumber",
  getSpecificVerse
);
router.get(
  "/books/name/:bookName/chapters/:chapterNumber/verses/:verseNumber",
  getSpecificVerse
);

// Get verses from gospel name
router.get("/books/:bookId/gospelName/:gospelName", getVersesByGospel);

// // Search verses by text content
router.get("/search", searchVerses);

export default router;
