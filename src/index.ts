/* eslint-disable no-console */
import app from "./app";

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
