export default {
  Query: {
    team: async (parent, args, source) => {
      try {
        let schoolID = await source.db.Team.findOne({
          attributes: ['TeamId', 'School'],
          where: {
            Slug: args.School,
          },
        })
        let teamInfo = await source.db.Team.findOne({
          attributes: ['TeamId', 'School', 'Name', 'Conference', 'Coach', 'Location', 'State', 'Abbreviation'],
          where: {
            TeamID: schoolID.dataValues.TeamId,
            },
          }) 
        return {
          TeamId: teamInfo.dataValues.TeamId,
          School: teamInfo.dataValues.School,
          Name: teamInfo.dataValues.Name,
          Conference: teamInfo.dataValues.Conference,
          Coach: teamInfo.dataValues.Coach,
          Location: teamInfo.dataValues.Location,
          State: teamInfo.dataValues.State,
          Abbreviation: teamInfo.dataValues.Abbreviation,
        }
      }
      catch (e) {
        return {
          TeamId: "",
          School: "",
          Name: "",
          Conference: "",
          Coach: "",
          Location: "",
          State: "",
          Abbreviation: "",
        }
      }
    },

    matchup: async (parents, args, source) => {
      try {
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
      catch (e) {
        return {
          School1: args.School1,
          School2: args.School2,
          Wins: 0,
          Losses: 0,
          Ties: 0,
        }
      }
    }
  },

  Team: {
    Heisman: async (parent, args, source) => {
      try {
        let heismanInfo = await source.db.Heisman.findOne({
          attributes: ['School','Trophies','Special'],  
          where: {
            TeamId: parent.TeamId,
          }
        })
        return {
          Trophies: heismanInfo.dataValues.Trophies,
          Special: heismanInfo.dataValues.Special,
          School: heismanInfo.dataValues.School
        }
      }
      catch (e) {
        return {
          Trophies: 0,
          Special: "",
        }    
      }
    },
    SocialMedia: async (parent, args, source) => {
      try {
        let socialMediaInfo = await source.db.Team.findOne({
          attributes: ['ADTwitter', 'FBTwitter', 'SBNTwitter', 'URL'],
          where: {
            TeamId: parent.TeamId,
          }
        })
        return {
          ADTwitter: socialMediaInfo.dataValues.ADTwitter,
          FBTwitter: socialMediaInfo.dataValues.FBTwitter,
          SBNTwitter: socialMediaInfo.dataValues.SBNTwitter,
          URL: socialMediaInfo.dataValues.URL,
        }
      }
      catch (e) {
        return {
          ADTwitter: "",
          FBTwitter: "",
          URL: "",
        }
      }
    },
    Branding: async (parent, args, source) => {
      try {
        let brandingInfo = await source.db.Team.findOne({
          attributes: ['Color', 'SecondaryColor', 'LikeColor'],
          where: {
            TeamId: parent.TeamId,
          },
        })
        return {
          Color: brandingInfo.dataValues.Color,
          SecondaryColor: brandingInfo.dataValues.SecondaryColor,
          LikeColor: brandingInfo.dataValues.LikeColor,
        }
      }
      catch (e) {
        return {
          Color: "",
          SecondaryColor: "",
          LikeColor: "",
        }
      }
    },
    AllAmerican: async (parent, args, source) => {
      try {
        let allAmericanInfo = await source.db.AllAmerican.findOne({
          attributes: ['Number', 'Players'],
          where: {
            TeamId: parent.TeamId,
          },
        })
        return {
          Number: allAmericanInfo.dataValues.Number,
          Players: allAmericanInfo.dataValues.Players,
        }
      }
      catch (e) {
        return {
          Number: 0,
          Players: 0,
        }
      }
    },
  },
  Heisman: {
    HeismanWinners: async (parent, args, source) => {
      console.log ("HELLOWORLD")
      console.log(parent)
      console.log ("GOODBYEWORLD")
      try {
        let heismanWinnersInfo = await source.db.HeismanList.findAll({
          attributes: ['Year', 'Winner', 'Position', 'Points', 'PercentPointsPossible'],          
          where: {
            School: parent.School,
          },
        })
        return heismanWinnersInfo
      }
      catch (e) {
        return []
      }
    },
  },
};
