import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import db from './models';
import cors from 'cors';



import typeDefs from './api/schema.gql';
import resolvers from './api/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use(cors())


app.options('https://winsipedia-api.herokuapp.com/graphql', cors());


app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { db } }));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));


db.sequelize.sync({})
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log('listening on 3000');
    });
  });
