import { RequestHandler } from "express";

export interface SpaceHandlers {
  getAll: RequestHandler;
  getOne: RequestHandler;
  create: RequestHandler;
  update: RequestHandler;
  delete: RequestHandler;
}
