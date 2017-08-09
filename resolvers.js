export default {
  Query: {
    getHeisman: (parent, {School}, { db }) => db.Heisman.findOne({
      where: {
        School,
      },
    }),
  },
};
