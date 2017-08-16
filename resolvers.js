export default {
  Query: {
    team: (parent, args, source) => source.db.Team.findOne({
        attributes: ['TeamId', 'School', 'Name', 'Conference', 'Coach', 'Location', 'State', 'Abbreviation'],
        where: {
          School: args.School,
        },
    }),
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
  },
  Heisman: {
    HeismanWinners: (parent, args, source) => source.db.HeismanList.findAll({
      where: {
        School: parent.School,
      },
    }),
  },
};
