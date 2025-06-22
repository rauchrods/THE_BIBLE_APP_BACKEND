import BibleBook from "../models/BibleBook.js";

// Get all Bible books (metadata only, no verses)
export const getBibleBooks = async (req, res, next) => {
  try {
    const books = await BibleBook.find({}, { verses: 0 }); // Exclude verses array

    if (!books || books.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Bible books not found",
      });
    }

    res.status(200).json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

// Get all verses from a specific book by book ID or BookName
export const getVersesByBookIdORName = async (req, res, next) => {
  try {
    const { bookId, bookName } = req.params;
    const {
      index, // Starting index (increments by 1 on scroll)
      limit, // Number of verses per request
    } = req.query;

    let book;
    if (bookId) {
      book = await BibleBook.findById(bookId);
    } else if (bookName) {
      book = await BibleBook.findOne({
        "metadata.name": { $regex: new RegExp(bookName, "i") },
      });
    }

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Bible book not found",
      });
    }

    let verses = book.verses.map((v, index) => ({
      index,
      ...v.toObject(),
    }));

    if (!index || !limit) {
      return res.status(200).json({
        success: true,
        metadata: `${book.metadata.name}`,
        count: verses.length,
        verses: verses,
      });
    }

    const startIndex = parseInt(index) * parseInt(limit);
    const itemsPerPage = parseInt(limit);
    const totalCount = verses.length;

    // Validate index
    if (startIndex < 0 || startIndex >= totalCount) {
      return res.status(400).json({
        success: false,
        message: "Invalid index",
      });
    }

    const paginatedVerses = verses.slice(
      startIndex,
      Math.min(startIndex + itemsPerPage, totalCount)
    );

    res.status(200).json({
      success: true,
      metadata: `${book.metadata.name}`,
      count: paginatedVerses.length,
      verses: paginatedVerses,
    });
  } catch (error) {
    next(error);
  }
};

// Get a specific verse
export const getSpecificVerse = async (req, res, next) => {
  try {
    const { bookId, bookName, chapterNumber, verseNumber } = req.params;
    const chapter = parseInt(chapterNumber);
    const verse = parseInt(verseNumber);

    let book;
    if (bookId) {
      book = await BibleBook.findById(bookId);
    } else if (bookName) {
      book = await BibleBook.findOne({
        "metadata.name": { $regex: new RegExp(bookName, "i") },
      });
    }

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Bible book not found",
      });
    }

    const specificVerse = book.verses.filter(
      (v) => v.chapter === chapter && v.verse === verse
    );

    if (!specificVerse) {
      return res.status(404).json({
        success: false,
        message: `${book.metadata.name} ${chapter}:${verse} not found`,
      });
    }

    res.status(200).json({
      success: true,
      reference: `${book.metadata.name} ${chapter}:${verse}`,
      verses: specificVerse,
    });
  } catch (error) {
    next(error);
  }
};

export const getVersesByGospel = async (req, res, next) => {
  try {
    const { bookId, gospelName } = req.params;

    const {
      index, // Starting index (increments by 1 on scroll)
      limit, // Number of verses per request
    } = req.query;

    let book = await BibleBook.findById(bookId);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Bible book not found",
      });
    }

    let filteredVerses = book.verses.filter((v) =>
      v.book_name.toLowerCase().includes(gospelName.toLowerCase())
    );

    filteredVerses = filteredVerses.map((v, index) => ({
      index,
      ...v.toObject(),
    }));

    if (!filteredVerses || filteredVerses.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No verses found for gospel: ${gospelName} in ${book.metadata.name}`,
      });
    }

    if (!index || !limit) {
      res.status(200).json({
        success: true,
        reference: `${book.metadata.name} Book: ${gospelName}`,
        count: filteredVerses.length,
        verses: filteredVerses,
      });
    }

    const startIndex = parseInt(index) * parseInt(limit);
    const itemsPerPage = parseInt(limit);
    const totalCount = filteredVerses.length;

    // Validate index
    if (startIndex < 0 || startIndex >= totalCount) {
      return res.status(400).json({
        success: false,
        message: "Invalid index",
      });
    }

    const paginatedVerses = filteredVerses.slice(
      startIndex,
      Math.min(startIndex + itemsPerPage, totalCount)
    );

    res.status(200).json({
      success: true,
      reference: `${book.metadata.name} Book: ${gospelName}`,
      count: paginatedVerses.length,
      verses: paginatedVerses,
    });
  } catch (error) {
    next(error);
  }
};

// Search verses by text content
export const searchVerses = async (req, res, next) => {
  try {
    const { q, book, limit = 50, skip = 0 } = req.query;

    if (!q) {
      return res.status(400).json({
        success: false,
        message: "Search query 'q' parameter is required",
      });
    }

    let matchStage = {};
    if (book) {
      matchStage["metadata.name"] = { $regex: new RegExp(book, "i") };
    }

    const searchResults = await BibleBook.aggregate([
      ...(Object.keys(matchStage).length > 0 ? [{ $match: matchStage }] : []),
      { $unwind: "$verses" },
      {
        $match: {
          "verses.text": { $regex: new RegExp(q, "i") },
        },
      },
      {
        $project: {
          _id: 0,
          book: "$metadata.name",
          book_id: "$_id",
          verse: "$verses",
        },
      },
      { $skip: parseInt(skip) },
      { $limit: parseInt(limit) },
    ]);

    res.status(200).json({
      success: true,
      query: q,
      count: searchResults.length,
      data: searchResults,
    });
  } catch (error) {
    next(error);
  }
};
