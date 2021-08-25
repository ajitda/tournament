import { SchemaComposer } from 'graphql-compose';

const schemaComposer = new SchemaComposer();

import { UserQuery, UserMutation } from './user.js';
import { TournamentQuery, TournamentMutation } from './tournament.js';

schemaComposer.Query.addFields({
  ...UserQuery,
  ...TournamentQuery
});

schemaComposer.Mutation.addFields({
  ...UserMutation,
  ...TournamentMutation,
});

export default schemaComposer.buildSchema();