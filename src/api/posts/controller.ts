import IPostHandler from "./interface";
import delete_ from "./handlers/delete";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import create from "./handlers/create";
import update from "./handlers/update";

const controller: IPostHandler = {
  update,
  create,
  getAll,
  getOne,
  delete: delete_,
};

export default controller;
