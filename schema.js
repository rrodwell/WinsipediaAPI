export default `
  type Heisman {
    TeamId: Int!
    School: String!
    Trophies: Int!
    Special: String!
  }

  type Query {
    getHeisman(School: String!): Heisman
  }
`;
