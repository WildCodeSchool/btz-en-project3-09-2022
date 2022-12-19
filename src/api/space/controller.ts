import { SpaceHandlers } from "./interface";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import create from "./handlers/create";
import update from "./handlers/update";

const controller: SpaceHandlers = {
  getAll,
  getOne,
  create,
  //   delete,
  update,
};

export default controller;
