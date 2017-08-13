export default {
  Query: {
    school: (parent, args, db) => db.db.Heisman.findOne({
      attributes: ['TeamId', 'School', 'Trophies', 'Special'],
      where: {
        School: args.School,
      },
    }),
    heismanWinner: (parent, args, db) => db.db.HeismanList.findOne({
      where: {
        Year: args.Year,
      },
    }),
  },
  School: {
    heismanWinners: (parent, args, db) => db.db.HeismanList.findAll({
      where: {
        School: parent.School,
      },
    }),
  },
};
