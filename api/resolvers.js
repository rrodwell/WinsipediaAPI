export default {
  Query: {
    team: (parent, args, source) => source.db.Team.findOne({
      attributes: ['TeamId', 'School', 'Name', 'Conference', 'Coach', 'Location', 'State', 'Abbreviation'],
      where: {
        School: args.School,
      },
    }),
    matchup: async (parents, args, source) => {
      let school1ID = await source.db.Team.findOne({
        attributes: ['TeamId', 'School'],
        where: {
          Slug: args.School1,
        },
      })
      let school2ID = await source.db.Team.findOne({
        attributes: ['TeamId', 'School'],
        where: {
          Slug: args.School2,
        },
      })  
      let dbInfo =  await source.db["Record".concat(school1ID.dataValues.TeamId)].findOne({
        attributes: ['Wins', 'Losses', 'Ties'],
        where: {
          TeamID: school2ID.dataValues.TeamId,
        },
      })
      return  {
        School1: school1ID.dataValues.School,
        School2: school2ID.dataValues.School,
        Wins: dbInfo.Wins,
        Losses: dbInfo.Losses,
        Ties: dbInfo.Ties,
      }
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
