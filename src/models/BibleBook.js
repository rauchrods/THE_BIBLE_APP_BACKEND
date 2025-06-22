import mongoose from "mongoose";

const metadataSchema = new mongoose.Schema(
  {
    name: String,
    shortname: String,
    module: String,
    year: String,
    publisher: String,
    owner: String,
    description: String,
    lang: String,
    lang_short: String,
    copyright: Number,
    copyright_statement: String,
    url: String,
    citation_limit: Number,
    restrict: Number,
    italics: Number,
    strongs: Number,
    red_letter: Number,
    paragraph: Number,
    official: Number,
    research: Number,
    module_version: String,
  },
  { _id: false }
);

const verseSchema = new mongoose.Schema(
  {
    book_name: {
      type: String,
      required: true,
    },
    book: {
      type: Number,
      required: true,
    },
    chapter: {
      type: Number,
      required: true,
    },
    verse: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const bibleBookSchema = new mongoose.Schema(
  {
    metadata: {
      type: metadataSchema,
      required: true,
    },
    verses: {
      type: [verseSchema],
      required: true,
    },
  },
  {
    collection: "bibleBooks",
  }
);

const BibleBook = mongoose.model("BibleBook", bibleBookSchema);

export default BibleBook;
