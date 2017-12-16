export default (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    TeamId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    School: DataTypes.STRING,
    Name: DataTypes.STRING,
    Slug: DataTypes.STRING,
    Conference: DataTypes.STRING,
    Coach: DataTypes.STRING,
    Location: DataTypes.STRING,
    State: DataTypes.STRING,
    Abbreviation: DataTypes.STRING,
    CFDBHook: DataTypes.STRING,
    ADTwitter: DataTypes.STRING,
    FBTwitter: DataTypes.STRING,
    SBNTwitter: DataTypes.STRING,
    SBNTwitterSecond: DataTypes.STRING,
    URL: DataTypes.STRING,
    Color: DataTypes.STRING,
    SecondaryColor: DataTypes.STRING,
    LikeColor: DataTypes.STRING,
    TicketCityId: DataTypes.INTEGER,
    TicketCityBannerLinkId_728_90: DataTypes.STRING,
    TicketCityBannerLinkId_300_250: DataTypes.STRING,
    FanaticsLinkText_728_90: DataTypes.STRING,
  });
  return Team;
};
