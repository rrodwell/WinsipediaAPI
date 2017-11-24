export default {
  Query: {
    team: async (parent, args, source) => {
      try {
        let teamInfo = await source.db.Team.findOne({
          attributes: [
            'TeamId', 
            'School', 
            'Name', 
            'Conference', 
            'Coach', 
            'Location', 
            'State', 
            'Abbreviation'
          ],
            where: {
              Slug: args.School,
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
          Matchup: args.Matchup
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
  },

  Team: {
    Matchup: async (parent, args, source) => {
      try {
        let matchupTeam = await source.db.Team.findOne({
          attributes: [
            'TeamId', 
            'School'
          ],
          where: {
            Slug: parent.Matchup,
          },
        })  
        let dbInfo =  await source.db["Record".concat(parent.TeamId)].findOne({
          attributes: [
            'Wins', 
            'Losses', 
            'Ties'
          ],
          where: {
            TeamID: matchupTeam.dataValues.TeamId,
          },
        })
        return  {
          MatchupSchool: matchupTeam.dataValues.School,
          Wins: dbInfo.Wins,
          Losses: dbInfo.Losses,
          Ties: dbInfo.Ties,
        }
      }
      catch (e) {
        return {
          MatchupSchool: "",
          Wins: 0,
          Losses: 0,
          Ties: 0,
        }
      }
    },
    AllTimeRankings: async (parent, args, source) => {
      try {
        let allTimeRankingsInfo = await source.db.Rank.findOne({
          attributes: [
            'AllTimeRecordRank', 
            'AllTimeRecordPercent', 
            'AllTimeRecordWins', 
            'AllTimeRecordLosses', 
            'AllTimeRecordTies', 
            'NationalChampRank', 
            'NationalChampData', 
            'ConferenceChampRank', 
            'ConferenceChampData', 
            'BowlGameRank', 
            'WinRank', 
            'WinData', 
            'BowlRecordRank', 
            'BowlRecordPercent', 
            'BowlRecordWins', 
            'BowlRecordLosses', 
            'BowlRecordTies', 
            'AllAmericanRank', 
            'AllAmericanData', 
            'HeismanRank', 
            'HeismanData', 
            'NFLDraftRank', 
            'NFLDraftData', 
            'NFLFirstRoundRank', 
            'NFLFirstRound', 
            'APOneRank', 
            'APOne', 
            'WeeksInPollRank', 
            'WeeksInPollData', 
            'Overall', 
            'OverallRank', 
            'BowlStreakRank', 
            'BowlStreakData'
          ],          
          where: {
            teamId: parent.TeamId
          }
        })
        return allTimeRankingsInfo
      }
      catch (e) {
        return {
          AllTimeRecordRank: 0,
          AllTimeRecordPercent: 0,
          AllTimeRecordWins: 0,
          AllTimeRecordLosses: 0,
          AllTimeRecordTies: 0,
          NationalChampRank: 0,
          NationalChampData: 0,
          ConferenceChampRank: 0,
          ConferenceChampData: 0,
          BowlGameRank: 0,
          WinRank: 0,
          WinData: 0,
          BowlRecordRank: 0,
          BowlRecordPercent: 0,
          BowlRecordWins: 0,
          BowlRecordLosses: 0,
          BowlRecordTies: 0,
          AllAmericanRank: 0,
          AllAmericanData: 0,
          HeismanRank: 0,
          HeismanData: 0,
          NFLDraftRank: 0,
          NFLDraftData: 0,
          NFLFirstRoundRank: 0,
          NFLFirstRound: 0,
          APOneRank: 0,
          APOne: 0,
          WeeksInPollRank: 0,
          WeeksInPollData: 0,
          Overall: 0,
          OverallRank: 0,
          BowlStreakRank: 0,
          BowlStreakData: 0,
        }
      }
    },
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
          attributes: [
            'Color', 
            'SecondaryColor', 
            'LikeColor'
          ],
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
          attributes: [
            'Number', 
            'Players'
          ],
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
          attributes: [
            'Year', 
            'Winner', 
            'Position', 
            'Points', 
            'PercentPointsPossible'
          ],          
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
