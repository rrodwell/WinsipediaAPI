export default `

  # Base information about a schools Heismans 
  type Heisman {
    # This is the ID of the team
    TeamId: ID!
    # The name of the university
    School: String!
    # How many Heisman trophies the school has won
    Trophies: Int!
    # Any special comments about the trophies(looking at you USC)
    Special: String!
  } 

  type Query {
    # Search by school for basic Heisman information
    getHeisman(School: String!): Heisman
  }
`;
