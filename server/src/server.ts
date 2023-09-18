import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} from "graphql";
import cors from "cors";
import axios from "axios";

const CharacterType = new GraphQLObjectType({
  name: "Character",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    species: { type: GraphQLString },
    image: { type: GraphQLString },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    humans: {
      type: new GraphQLList(CharacterType),
      args: {
        page: { type: GraphQLInt },
      },
      resolve: async (_, args) => {
        try {
          const response = await axios.post(
            "https://rickandmortyapi.com/graphql",
            {
              query: `
                query {
                  characters(page: ${args.page}, filter: { species: "Human" }) {
                    results {
                      id
                      name
                      image
                    }
                  }
                }
              `,
            },
          );

          const data = response.data;

          let results = data.data.characters.results;

          return results;
        } catch (error) {
          throw new Error("Error obtaining humans from API");
        }
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(
  "/graphql",
  createHandler({
    schema,
  }),
);

const PORT = 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
