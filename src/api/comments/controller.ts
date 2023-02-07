import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import create from "./handlers/create";
import update from "./handlers/update";
import delete_ from "./handlers/delete";
import disable from "./handlers/disable";
import undisable from "./handlers/undisable";

const controller = {
  getAll,
  getOne,
  create,
  update,
  delete_,
  disable,
  undisable,
};

export default controller;
