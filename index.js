import express from "express";

// Graphql
import graphqlHTTP from "express-graphql";
import schema from "./schema";

// Resolvers
import resolvers from "./resolvers";

const root = resolvers;

const app = express();

app.get("/", (req, res) => {
  res.send("Todo listo");
});

app.use(
  "/graphql",
  graphqlHTTP({
    // que schema va a utilizar
    schema: schema,
    rootValue: root,
    //Utilizar Graphql
    graphiql: true
  })
);

app.listen(8000, () => {
  console.log("El servidor esta funcionando");
});