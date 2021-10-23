import "reflect-metadata";
import "./database/mongoose/connection";

import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { VideoResolver } from '../graphql/entities/video/VideoResolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [VideoResolver]
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 4100 }, console.log(`🚀 Server ready at http://localhost:4100`));
}

bootstrap();