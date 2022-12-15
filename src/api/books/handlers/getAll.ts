import { books } from "../../../../DB/books";
import { BookHandlers } from "../interface";

export const getAllBooks: BookHandlers["getAll"] = (req, res) => {
  res.status(200).json(books);
};
