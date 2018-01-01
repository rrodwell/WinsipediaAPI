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
          SchoolName: teamInfo.dataValues.School,
          TeamName: teamInfo.dataValues.Name,
          Conference: teamInfo.dataValues.Conference,
          Coach: teamInfo.dataValues.Coach,
          City: teamInfo.dataValues.Location,
          State: teamInfo.dataValues.State,
          Abbreviation: teamInfo.dataValues.Abbreviation,
          MatchupSlug: args.Matchup,
          SchoolSlug: args.School,
        }
      }
      catch (e) {
        return {
          TeamId: "",
          School: "",
          TeamName: "",
          Conference: "",
          Coach: "",
          City: "",
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
            Slug: parent.MatchupSlug,
          },
        })  
        let dbInfo =  await source.db["Record".concat(parent.TeamId)].findOne({
          attributes: [
            'Wins', 
            'Losses', 
            'Ties',
            'Pct',
            'CurrentStreak',
            'CurrentStreakYears'
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
          WinStreakLength: dbInfo.CurrentStreak,
          WinStreakStartYear: dbInfo.CurrentStreakYears.substring(0, 4),
          WinStreakEndYear: dbInfo.CurrentStreakYears.substring(dbInfo.CurrentStreakYears.length-4, dbInfo.CurrentStreakYears.length),
          WinPercent: ((Math.round(dbInfo.Pct*1000)/1000).toString()+"0000").substring(0, 1)+"."+((Math.round(dbInfo.Pct*1000)/1000).toString()+"0000").substring(2, 5),
          MatchupTeamID: matchupTeam.dataValues.TeamId,
          MatchupSlug: parent.MatchupSlug,
          SchoolSlug: parent.SchoolSlug
        }
      }
      catch (e) {
        return {
          MatchupSchool: "",
          Wins: 0,
          Losses: 0,
          Ties: 0,
          WinStreakLength: 0,
          WinStreakStartYear: 0,
          WinStreakEndYear: 0,
          WinPercent: 0,
          MatchupTeamID: 0,
          MatchupSlug: parent.MatchupSlug,
          SchoolSlug: parent.SchoolSlug
        }
      }
    },
    AllTimeRankings: async (parent, args, source) => {
      try {
        let allTimeRankingsInfo = await source.db.Rank.findOne({
          attributes: [
            'AllTimeRecordRank', 
            'BowlGameData',
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
        console.log("here 1")
        console.log(allTimeRankingsInfo.dataValues.AllTimeRecordPercent.toString().substring(0,5))
        console.log("here 2")
        return {
          AllTimeRecordRank: allTimeRankingsInfo.dataValues.AllTimeRecordRank,
          AllTimeRecordPercent: allTimeRankingsInfo.dataValues.AllTimeRecordPercent.toString().substring(0,5),
          AllTimeRecordWins: allTimeRankingsInfo.dataValues.AllTimeRecordWins,
          AllTimeRecordLosses: allTimeRankingsInfo.dataValues.AllTimeRecordLosses,
          AllTimeRecordTies: allTimeRankingsInfo.dataValues.AllTimeRecordTies,
          NationalChampRank: allTimeRankingsInfo.dataValues.NationalChampRank,
          NationalChampData: allTimeRankingsInfo.dataValues.NationalChampData,
          ConferenceChampRank: allTimeRankingsInfo.dataValues.ConferenceChampRank,
          ConferenceChampData: allTimeRankingsInfo.dataValues.ConferenceChampData,
          BowlGameRank: allTimeRankingsInfo.dataValues.BowlGameRank,
          BowlGameData: allTimeRankingsInfo.dataValues.BowlGameData,
          WinRank: allTimeRankingsInfo.dataValues.WinRank,
          WinData: allTimeRankingsInfo.dataValues.WinData,
          BowlRecordRank: allTimeRankingsInfo.dataValues.BowlRecordRank,
          BowlRecordPercent: allTimeRankingsInfo.dataValues.BowlRecordPercent,
          BowlRecordWins: allTimeRankingsInfo.dataValues.BowlRecordWins,
          BowlRecordLosses: allTimeRankingsInfo.dataValues.BowlRecordLosses,
          BowlRecordTies: allTimeRankingsInfo.dataValues.BowlRecordTies,
          AllAmericanRank: allTimeRankingsInfo.dataValues.AllAmericanRank,
          AllAmericanData: allTimeRankingsInfo.dataValues.AllAmericanData,
          HeismanRank: allTimeRankingsInfo.dataValues.HeismanRank,
          HeismanData: allTimeRankingsInfo.dataValues.HeismanData,
          NFLDraftRank: allTimeRankingsInfo.dataValues.NFLDraftRank,
          NFLDraftData: allTimeRankingsInfo.dataValues.NFLDraftData,
          NFLFirstRoundRank: allTimeRankingsInfo.dataValues.NFLFirstRoundRank,
          NFLFirstRound: allTimeRankingsInfo.dataValues.NFLFirstRound,
          APOneRank: allTimeRankingsInfo.dataValues.APOneRank,
          APOne: allTimeRankingsInfo.dataValues.APOne,
          WeeksInPollRank: allTimeRankingsInfo.dataValues.WeeksInPollRank,
          WeeksInPollData: allTimeRankingsInfo.dataValues.WeeksInPollData,
          Overall: allTimeRankingsInfo.dataValues.Overall,
          OverallRank: allTimeRankingsInfo.dataValues.OverallRank,
          BowlStreakRank: allTimeRankingsInfo.dataValues.BowlStreakRank,
          BowlStreakData: allTimeRankingsInfo.dataValues.BowlStreakData,
        }
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
          BowlGameData: 0,
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
          Notes: heismanInfo.dataValues.Special,
          School: heismanInfo.dataValues.School
        }
      }
      catch (e) {
        return {
          Trophies: 0,
          Notes: "",
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
          AtheleticDepartmentTwitter: socialMediaInfo.dataValues.ADTwitter,
          FootballTwitter: socialMediaInfo.dataValues.FBTwitter,
          SBNTwitter: socialMediaInfo.dataValues.SBNTwitter,
          HomePageURL: socialMediaInfo.dataValues.URL,
        }
      }
      catch (e) {
        return {
          AtheleticDepartmentTwitter: "",
          FootballTwitter: "",
          SBNTwitter: "",
          HomePageURL: "",
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
          HexColor: brandingInfo.dataValues.Color,
          HexSecondaryColor: brandingInfo.dataValues.SecondaryColor,
          LikeColor: brandingInfo.dataValues.LikeColor,
        }
      }
      catch (e) {
        return {
          HexColor: "",
          HexSecondaryColor: "",
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

  Matchup: {
    MatchupTeam: async (parent, args, source) => {
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
              TeamID: parent.MatchupTeamID,
            },
          }) 
        return {
          TeamId: teamInfo.dataValues.TeamId,
          SchoolName: teamInfo.dataValues.School,
          TeamName: teamInfo.dataValues.Name,
          Conference: teamInfo.dataValues.Conference,
          Coach: teamInfo.dataValues.Coach,
          City: teamInfo.dataValues.Location,
          State: teamInfo.dataValues.State,
          Abbreviation: teamInfo.dataValues.Abbreviation,
          SchoolSlug: parent.MatchupSlug,
          MatchupSlug: parent.SchoolSlug,
        }
      }
      catch (e) {
        return {
          TeamId: "",
          SchoolName: "",
          TeamName: "",
          Conference: "",
          Coach: "",
          City: "",
          State: "",
          Abbreviation: "",
        }
      }
    },
  },
};
