import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import env from './env'

let app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(env.port, () => {
  console.log('Running a GraphQL API server at http://localhost:'+env.port+'/graphql');
});

