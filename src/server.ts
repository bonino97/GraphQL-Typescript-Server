import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';

const PORT = 5000;
const app = express();
const httpServer = createServer(app);

app.use(cors());
app.use(compression());

const server = new ApolloServer({
  schema,
  introspection: true,
});

server.applyMiddleware({ app });

httpServer.listen({ port: PORT }, () =>
  console.log(`http://localhost:${PORT}/graphql`)
);
