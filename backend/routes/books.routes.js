import express from "express";
import {
  addBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/", protectRoute, addBook);
router.get("/", protectRoute, getBooks);
router.get("/:id", protectRoute, getBookById);
router.put("/:id", protectRoute, updateBook);
router.delete("/:id", protectRoute, deleteBook);

export default router;
