const { server } = require("./src");

server.listen(9898, () => {
  console.log(`Server is up and running on port : ${9898}`);
});
