# Bible API 📖

A RESTful API for accessing Bible verses, books, and performing text searches across biblical content.

## 🚀 Features

- Get all Bible books metadata
- Retrieve verses by book ID or book name
- Get specific verses by chapter and verse number
- Filter verses by gospel name
- Search verses by text content
- Pagination support for large datasets
- Rate limiting and security middleware
- Health check endpoint

## 🛠️ Tech Stack

- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Security**: Helmet, CORS, Rate Limiting
- **Logging**: Morgan
- **Environment**: dotenv, cross-env

## 📚 API Documentation

### Base URL

```
https://bible.rauchrodrigues.in/api/bible/v1
```

### Health Check

Check if the API is running:

**GET** `/health`

**Response:**

```json
{
  "success": true,
  "message": "Bible API is running!",
  "timestamp": "2025-06-22T10:30:00.000Z"
}
```

---

## 📖 Bible Books

### Get All Bible Books

Retrieve metadata for all Bible books (excluding verses):

**GET** `/books`

**Response:**

```json
{
  "success": true,
  "count": 10,
  "data": [
    {
      "_id": "6856be99912e195b0208d94b",
      "metadata": {
        "name": "American Standard Version",
        "shortname": "ASV",
        "module": "asv",
        "year": "1901",
        "publisher": null,
        "owner": null,
        "description": "<h2><strong>The English Revised Version, 1881-1895</strong><br />\nIncluding the American Standard Version, 1901</h2>\n\n<hr />\n<p>The article TEXT OF THE NEW TESTAMENT describes the process of accumulation of materials which began with the coming of the Codex Alexandrinus to London in 1625, and continues to the present day, and the critical use made of these materials in the 19th century; and the story need not be repeated here. It was not until the progress of criticism had revealed the defective state of the received Greek text of the New Testament that any movement arose for the revision of the Authorized Version. About the year 1855 the question began to be mooted in magazine articles and motions in Convocation, and by way of bringing it to a head a small group of scholars (Dr. Ellicott, afterwards bishop of Gloucester, Dr. Moberly, head master of Winchester and afterwards bishop of Salisbury, Dr. Barron, principal of St. Edmund&#39;s Hall, Oxford, the Rev. H. Alford, afterwards dean of Canterbury, and the Rev. W.G. Humphrey; with the Rev. E. Hawkins, secretary of the S.P.G., and afterwards canon of Westminster, as their secretary) undertook a revision of the Authorized Version of John, which was published in 1857. Six of the Epistles followed in 1861 and 1863, by which time the object of the work, in calling attention to the need and the possibility of a revision, had been accomplished. Meanwhile a great stimulus to the interest in textual criticism had been given by the discovery of the Codex Sinaiticus, and by the work of Tischendorf and Tregelles. In February 1870 a motion for a committee to consider the desirableness of a revision was adopted by both houses of the Convocation of Canterbury; and definite motions in favor of such a revision were passed in the following May. The Convocation of York did not concur, and thenceforth the Southern Houses proceeded alone. A committee of both houses drew up the lists of revisers, and framed the rules for their guidance. The Old Testament company consisted of 25 (afterwards 27) members, the New Testament of 26. The rules prescribed the introduction of as few alterations in the Authorized Version as possible consistently with faithfulness; the text to be adopted for which the evidence is decidedly preponderating, and when it differs from that from which the Authorized Version was made, the alteration to be indicated in the margin (this rule was found impracticable); alterations to be made on the first revision by simple majorities, but to be retained only if passed by a two-thirds majority on the second revision. Both companies commenced work at Westminster on June 22, 1870. The New Testament company met on 407 days in the course of eleven years, the Old Testament company on 792 days in fifteen years. Early in the work the cooperation of American scholars was invited, and in consequence two companies of 15 and 16 members respectively were formed, which began work in 1872, considering the results of the English revision as each section of it was forwarded to them. The collaboration of the English and American companies was perfectly harmonious; and by agreement those recommendations of the American Revisers which were not adopted by the English companies, but to which the proposers nevertheless wished to adhere, were printed in an appendix to the published Bible. Publication took place, in the case of the New Testament, on May 17, 1881, and in the case of the canonical books of the Old Testament almost exactly four years later. The revision of the Apocrypha was divided between the two English companies, and was taken up by each company on the completion of its main work. The New Testament company distributed Sirach, Tobit, Judith, Wisdom, 1 and 2 Maccabees among three groups of its members, and the Old Testament company appointed a small committee to deal with the remaining books. The work dragged on over many years, involving some inequalities in revision, and ultimately the Apocrypha was published in 1895.<br />\n<br />\nIn dealing with the Old Testament the Revisers were not greatly concerned with questions of text. The Massoretic Hebrew text available in 1870 was substantially the same as that which King James&#39; translators had before them; and the criticism of the Septuagint version was not sufficiently advanced to enable them safely to make much use of it except in marginal notes. Their work consisted mainly in the correction of mistranslations which imperfect Hebrew scholarship had left in the Authorized Version. Their changes as a rule are slight, but tend very markedly to remove obscurities and to improve the intelligibility of the translation. The gain is greatest in the poetical and prophetical books (poetical passages are throughout printed as such, which in itself is a great improvement), and there cannot be much doubt that if the revision of the Old Testament had stood by itself it would have been generally accepted without much opposition. With the new version of the New Testament the case was different. The changes were necessarily more numerous than in the Old Testament, and the greater familiarity with the New Testament possessed by readers in general made the alterations more conspicuous. The New Testament revisers had, in effect, to form a new Greek text before they could proceed to translate it. In this part of their work they were largely influenced by the presence of Drs. Westcott and Hort, who, as will be shown elsewhere [TEXT OF THE NEW TESTAMENT], were keen and convinced champions of the class of text of which the best representative is the Codex Vaticanus. At the same time Dr. Scrivener, who took a less advanced view of the necessity of changes in the Received Text, was also a prominent member of the company, and it is probably true that not many new readings were adopted which had not the support of Tischendorf and Tregelles, and which would not be regarded by nearly all scholars acquainted with textual criticism as preferable to those of the Authorized Version. To Westcott and Hort may be assigned a large part of the credit for leading the Revisers definitely along the path of critical science; but the Revisers did not follow their leaders the whole way, and their text (edited by Archdeacon Palmer for the Oxford Press in 1881) represents a more conservative attitude than that of the two Cambridge scholars. Nevertheless the amount of textual change was considerable, and to this was added a very large amount of verbal change, sometimes (especially in the Epistles) to secure greater intelligibility, but oftener (and this is more noticeable in the Gospels) to secure uniformity in the translation of Greek words which the Authorized Version deliberately rendered differently in different places (even in parallel narratives of the same event), and precision in the representation of moods and tenses. It was to the great number of changes of this kind, which by themselves appeared needless and pedantic, that most of the criticism bestowed upon the Revised Version was due; but it must be remembered that where the words and phrases of a book are often strained to the uttermost in popular application, it is of great importance that those words and phrases should be as accurately rendered as possible. On the whole, it is certain that the Revised Version marks a great advance on the Authorized Version in respect of accuracy, and the main criticisms to which it is justly open are that the principles of classical Greek were applied too rigidly to Greek which is not classical, and that the Revisers, in their careful attention to the Greek, were less happily inspired than their predecessors with the genius of the English language. These defects have no doubt militated against the general acceptance of the Revised Version; but whether they continue to do so or not (and it is to be remembered that we have not yet passed through nearly so long a period as that during which the Authorized Version competed with the Geneva Bible or Jerome&#39;s Vulgate with the Old Latin), it is certain that no student of the Bible can afford to neglect the assistance given by the Revised Version towards the true understanding of the Scriptures. In so using it, it should be remembered that renderings which appear in the margin not infrequently represent the views of more than half the Revisers, though they failed to obtain the necessary two-thirds majority. This is perhaps especially the case in the Old Testament, where the Revised Version shows a greater adherence to the Authorized Version than in the New Testament.<br />\n<br />\nIt only remains to add that, after the lapse of the 14 years during which it was agreed that no separate American edition should be brought out, while the American appendix continued to appear in the English Revised Version, the American Revisers issued a fresh recension (New Testament in 1900, Old Testament in 1901, without the Apocrypha), embodying not only the readings which appeared in their appendix to the English Revised Version, but also others on which they had since agreed. It is unfortunate that the action originally taken by the English revisers with a view to securing that the two English-speaking nations should continue to have a common Bible should have brought about the opposite result; and though the alterations introduced by the American revisers eminently deserve consideration on their merits, it may be doubted whether the net result is important enough to justify the existence of a separate version. What influence it may have upon the history of the English Bible in the future it is for the future to decide.<br />\n<br />\nFrederic G. Kenyon<br />\n<br />\n<br />\n<br />\nThis Bible imported from Bible Analyzer <a href=\"http://www.bibleanalyzer.com/download.htm\">http://www.bibleanalyzer.com/download.htm</a></p>\n",
        "lang": "",
        "lang_short": "en",
        "copyright": 0,
        "copyright_statement": "This Bible is in the Public Domain.",
        "url": null,
        "citation_limit": 0,
        "restrict": 0,
        "italics": 0,
        "strongs": 0,
        "red_letter": 0,
        "paragraph": 0,
        "official": 1,
        "research": 1,
        "module_version": "5.6.1"
      }
    }
  ]
}
```

---

## 📜 Verses

### Get Verses by Book ID

Retrieve all verses from a specific book using book ID:

**GET** `/verses/:bookId/`

**Query Parameters:**

- `index` (optional) - Starting page index (0-based)
- `limit` (optional) - Number of verses per page

**Examples:**

```bash
# Get all verses
GET /verses/64a1b2c3d4e5f6789/

# Get paginated verses (page 0, 20 verses)
GET /verses/64a1b2c3d4e5f6789/?index=0&limit=5
```

**Response:**

```json
{
  "success": true,
  "metadata": "American Standard Version",
  "count": 5,
  "verses": [
    {
      "index": 0,
      "book_name": "Genesis",
      "book": 1,
      "chapter": 1,
      "verse": 1,
      "text": "In the beginning God created the heavens and the earth."
    },
    {
      "index": 1,
      "book_name": "Genesis",
      "book": 1,
      "chapter": 1,
      "verse": 2,
      "text": "And the earth was waste and void; and darkness was upon the face of the deep: and the Spirit of God moved upon the face of the waters."
    },
    {
      "index": 2,
      "book_name": "Genesis",
      "book": 1,
      "chapter": 1,
      "verse": 3,
      "text": "And God said, Let there be light: and there was light."
    },
    {
      "index": 3,
      "book_name": "Genesis",
      "book": 1,
      "chapter": 1,
      "verse": 4,
      "text": "And God saw the light, that it was good: and God divided the light from the darkness."
    },
    {
      "index": 4,
      "book_name": "Genesis",
      "book": 1,
      "chapter": 1,
      "verse": 5,
      "text": "And God called the light Day, and the darkness he called Night. And there was evening and there was morning, one day."
    }
  ]
}
```

### Get Verses by Book Name

Retrieve verses using book name instead of ID:

**GET** `/verses/bookName/:bookName`

**Query Parameters:**

- `index` (optional) - Starting page index
- `limit` (optional) - Number of verses per page

**Examples:**

```bash
# Case-insensitive book name search
GET /verses/bookName/American Standard Version?index=3000&limit=5
GET /verses/bookName/American Standard?index=3000&limit=5
GET /verses/bookname/american sta?index=3000&limit=5
```

```json
{
  "success": true,
  "metadata": "American Standard Version",
  "count": 5,
  "verses": [
    {
      "index": 15000,
      "book_name": "Psalms",
      "book": 19,
      "chapter": 71,
      "verse": 24,
      "text": "My tongue also shall talk of thy righteousness all the day long; For they are put to shame, for they are confounded, that seek my hurt."
    },
    {
      "index": 15001,
      "book_name": "Psalms",
      "book": 19,
      "chapter": 72,
      "verse": 1,
      "text": "[[ A Psalm] of Solomon]. Give the king thy judgments, O God, And thy righteousness unto the king's son."
    },
    {
      "index": 15002,
      "book_name": "Psalms",
      "book": 19,
      "chapter": 72,
      "verse": 2,
      "text": "He will judge thy people with righteousness, And thy poor with justice."
    },
    {
      "index": 15003,
      "book_name": "Psalms",
      "book": 19,
      "chapter": 72,
      "verse": 3,
      "text": "The mountains shall bring peace to the people, And the hills, in righteousness."
    },
    {
      "index": 15004,
      "book_name": "Psalms",
      "book": 19,
      "chapter": 72,
      "verse": 4,
      "text": "He will judge the poor of the people, He will save the children of the needy, And will break in pieces the oppressor."
    }
  ]
}
```

---

## 🎯 Specific Verses

### Get Specific Verse by Book ID

Get a specific verse by chapter and verse number:

**GET** `/books/:bookId/chapters/:chapterNumber/verses/:verseNumber`

**Example:**

```bash
GET /books/64a1b2c3d4e5f6789/chapters/1/verses/1
```

### Get Specific Verse by Book Name

Same as above but using book name:

**GET** `/books/name/:bookName/chapters/:chapterNumber/verses/:verseNumber`

**Example:**

```bash
GET /books/name/Genesis/chapters/1/verses/1
```

**Response:**

```json
{
  "success": true,
  "reference": "Genesis 1:1",
  "verses": [
    {
      "book_name": "Genesis",
      "book": 1,
      "chapter": 1,
      "verse": 1,
      "text": "In the beginning God created the heaven and the earth."
    }
  ]
}
```

---

## ⛪ Gospel Filtering

### Get Verses by Gospel Name

Filter verses within a book by gospel name:

**GET** `/verses/:bookId/:gospelName`

**Query Parameters:**

- `index` (optional) - Starting page index
- `limit` (optional) - Number of verses per page

**Example:**

```bash
GET /verses/64a1b2c3d4e5f6789/Matthew
```

**Response:**

```json
{
  "success": true,
  "reference": "New Testament Book: Matthew",
  "count": 15,
  "verses": [
    {
      "index": 0,
      "book_name": "Matthew",
      "book": 40,
      "chapter": 1,
      "verse": 1,
      "text": "The book of the generation of Jesus Christ..."
    }
  ]
}
```

---

## 🔍 Search

### Search Verses by Text

Search for verses containing specific text:

**GET** `/search`

**Query Parameters:**

- `q` (required) - Search query text
- `book` (optional) - Filter by specific book name
- `limit` (optional, default: 50) - Number of results
- `skip` (optional, default: 0) - Number of results to skip

**Examples:**

```bash
# Search all books
GET /search?q=love

# Search within specific book
GET /search?q=faith&book=Romans

# Paginated search
GET /search?q=peace&limit=10&skip=20
```

**Response:**

```json
{
  "success": true,
  "query": "love",
  "count": 25,
  "data": [
    {
      "book": "1 John",
      "book_id": "64a1b2c3d4e5f6789",
      "verse": {
        "book_name": "1 John",
        "book": 62,
        "chapter": 4,
        "verse": 8,
        "text": "He that loveth not knoweth not God; for God is love."
      }
    }
  ]
}
```

---

## 📝 Data Structure

### Book Metadata

```javascript
{
  "name": "Genesis",
  "shortname": "Gen",
  "module": "kjv",
  "year": "1769",
  "publisher": "Cambridge",
  "lang": "English",
  "lang_short": "en",
  "description": "The first book of the Bible"
}
```

### Verse Structure

```javascript
{
  "book_name": "Genesis",
  "book": 1,           // Book number
  "chapter": 1,        // Chapter number
  "verse": 1,          // Verse number
  "text": "In the beginning..."
}
```

---

## ⚡ Error Responses

### 404 - Not Found

```json
{
  "success": false,
  "message": "Bible book not found"
}
```

### 400 - Bad Request

```json
{
  "success": false,
  "message": "Search query 'q' parameter is required"
}
```

### 400 - Invalid Index

```json
{
  "success": false,
  "message": "Invalid index"
}
```

---

## 🔒 Rate Limiting

The API includes rate limiting middleware to prevent abuse. Default limits apply per IP address.

## 👨‍💻 Created with ❤️

This Bible API was created with love by **Rauch Rodrigues**.

🌐 **Portfolio**: [rauchrodrigues.in](https://rauchrodrigues.in/)

---
