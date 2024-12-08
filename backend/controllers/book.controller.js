import Book from "../models/book.model.js";

// Add a book
export const addBook = async (req, res) => {
  try {
    const { title, author, published_year, genre, available_copies } = req.body;

    // Validate input
    if (!title || !author || !published_year || !genre || !available_copies) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if the book already exists
    const existingBook = await Book.findOne({ title, author });
    if (existingBook) {
      return res.status(400).json({
        message: "A book with the same title and author already exists.",
      });
    }

    // Create a new book
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();

    // Respond with the saved book
    res.status(201).json(savedBook);
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// Get all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// Get a single book
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found." });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// Update a book
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found." });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// Delete a book
export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found." });
    }
    res.status(200).json({ message: "Book deleted successfully." });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Server error." });
  }
};
