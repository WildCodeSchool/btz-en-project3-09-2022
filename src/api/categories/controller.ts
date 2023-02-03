import { CategoryHandlers } from "./interface";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import create from "./handlers/create";
import update from "./handlers/update";
import delete_ from "./handlers/delete";
import addUser from "./handlers/addUser";

const controller: CategoryHandlers = {
  getAll,
  getOne,
  create,
  delete: delete_,
  update,
  addUser,
};

export default controller;
