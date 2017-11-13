export default {
  Query: {
    team: (parent, args, source) => source.db.Team.findOne({
      attributes: ['TeamId', 'School', 'Name', 'Conference', 'Coach', 'Location', 'State', 'Abbreviation'],
      where: {
        School: args.School,
      },
    }),
    matchup: (parents, args, source) => source.db[args.School1].findOne({
        attributes: ['TeamId', 'School', 'Wins', 'Losses', 'Ties'],
        where: {
          TeamID: args.School2,
        },
      })
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
