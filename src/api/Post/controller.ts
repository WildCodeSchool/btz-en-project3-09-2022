import IPostHandler from "./interface";
import delete_ from "./handlers/delete";

const controller: IPostHandler = {
  delete: delete_,
};

export default controller;
