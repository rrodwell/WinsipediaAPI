import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import db from './models';


import typeDefs from './api/schema.gql';
import resolvers from './api/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { db } }));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));


db.sequelize.sync({})
  .then(function() {
    app.listen(3000, function() {
      console.log('listening on 3000');
    });
  });
