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
  
  type HeismanList {
    id: ID!
    Year: Int!
    Winner: String!
    School: String!
    Position: String!
    Points: Int!
    PercentPointsPossible: String!
    Heisman: Heisman!
  }

  
  type RootQuery {
    HeismanList: HeismanList!
    Heisman: Heisman!
  }
  
  type Query {
    # Search by school for basic Heisman information
    getHeisman(School: String!): Heisman
  }
`;
