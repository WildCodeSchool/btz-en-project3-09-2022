/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "multiparty";

function asyncFormParse(req: any): Promise<{ fields: any; files: any }> {
  return new Promise((resolve, reject) => {
    const form = new Form();
    form.parse(req, async (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
}

export default asyncFormParse;
