export default `

  # Base information about a schools Heismans 
  type Heisman {
    # This is the ID of the team
    TeamId: Int! #Go jackets
    # The name of the university
    School: String!
    # How many heisman trophies the school has won
    Trophies: Int!
    # Any special comments about the trophies
    Special: String!
  } 

  type Query {
    # Search by school for basic Heisman information
    getHeisman(School: String!): Heisman
  }
`;
