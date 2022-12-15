/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from "express";

type Book = {
  id: string;
  title: string;
  year: Date;
};

export interface BookHandlers {
  getAll: RequestHandler<Record<any, string>, Book[], null>;
}
