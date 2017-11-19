export default {
  Query: {
    team: (parent, args, source) => source.db.Team.findOne({
      attributes: ['TeamId', 'School', 'Name', 'Conference', 'Coach', 'Location', 'State', 'Abbreviation'],
      where: {
        School: args.School,
      },
    }),
    matchup: async (parents, args, source) => {
      let School1ID = await source.db.Team.findOne({
        attributes: ['TeamId'],
        where: {
          Slug: args.School1,
        },
      })
      let School2ID = await source.db.Team.findOne({
        attributes: ['TeamId'],
        where: {
          Slug: args.School2,
        },
      })  
      return source.db["Record".concat(School1ID.dataValues.TeamId)].findOne({
        attributes: ['TeamId', 'School', 'Wins', 'Losses', 'Ties'],
        where: {
          TeamID: School2ID.dataValues.TeamId,
        },
      })
    }
  },
  Team: {
    Heisman: (parent, args, source) => source.db.Heisman.findOne({
      where: {
        School: parent.School,
      },
    }),
    SocialMedia: (parent, args, source) => source.db.Team.findOne({
      attributes: ['ADTwitter', 'FBTwitter', 'SBNTwitter', 'URL'],
      where: {
        School: parent.School,
      },
    }),
    Branding: (parent, args, source) => source.db.Team.findOne({
      attributes: ['Color', 'SecondaryColor', 'LikeColor'],
      where: {
        School: parent.School,
      },
    }),
    AllAmerican: (parent, args, source) => source.db.AllAmerican.findOne({
      attributes: ['Number', 'Players'],
      where: {
        School: parent.School,
      },
    }),
  },
  Heisman: {
    HeismanWinners: (parent, args, source) => source.db.HeismanList.findAll({
      where: {
        School: parent.School,
      },
    }),
  },
};
