export default {
  Query: {
    getHeisman: (parent, { School }, { db }) => db.Heisman.findOne({
      where: {
        School,
      },
    }),
    // getHeismans: (parent, { Count }, { db }) => db.Heisman.findAll({
    //   where: {
    //     Trophies: Count,
    //   },
    // }),
  },
};
