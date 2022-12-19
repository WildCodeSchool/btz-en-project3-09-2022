import { SpaceHandlers } from "./interface";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";

const controller: SpaceHandlers = {
  getAll,
  getOne,
  //   create,
  //   delete,
  //   update,
};

export default controller;
