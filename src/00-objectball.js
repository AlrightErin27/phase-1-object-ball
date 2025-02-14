function gameObject() {
  const obj = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assits: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assits: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assits: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assits: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assits: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assits: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assits: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assits: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assits: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assits: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return obj;
}
//console.log(gameObject());

//making my object a var
const game = gameObject();
function playersObj() {
  return { ...game.home.players, ...game.away.players };
}
const players = playersObj();
const teams = Object.values(game);

function numPointsScored(name) {
  // Build a function, numPointsScored that takes in an argument of
  // a player's name and returns the number of points scored for that player.
  // Think about where in the object you will find a player's points.
  // How can you iterate down into that level?
  // Think about the return value of your function.
  return players[name].points;
}
//console.log(numPointsScored("Brendan Hayword"));

function shoeSize(name) {
  // Build a function, shoeSize, that takes in an argument of a player's
  // name and returns the shoe size for that player.
  // Think about how you will find the shoe size of the correct player.
  // How can you check and see if a player's name matches the name that
  //  has been passed into the function as an argument?
  return players[name].shoe;
}
//console.log(numPointsScored("Brendan Hayword"));

function findByTeamName(teamName) {
  return teams.find((team) => team.teamName === teamName);
}

function teamColors(teamName) {
  // Build a function, teamColors, that takes in an argument of
  // the team name and returns an array of that teams colors.
  return findByTeamName(teamName).colors;
}
//console.log(teamColors("Charlotte Hornets"));

function teamNames() {
  // Build a function, teamNames, that operates on the game object to return an
  // array of the team names.
  return teams.map((team) => team.teamName);
}
//console.log(teamNames());

function playerNumbers(targetTeamName) {
  // Build a function, playerNumbers, that takes in an argument of
  // a team name and returns an array of the jersey number's for that team.
  for (const i of teams) {
    if (i.teamName === targetTeamName) {
      let stats = Object.values(i.players);
      return stats.map((stat) => stat.number);
    }
  }
}
//console.log(playerNumbers("Charlotte Hornets"));

function playerStats(playerName) {
  // Build a function, playerStats, that takes in an argument of a player's
  // name and returns a object of that player's stats.
  return players[playerName];
}
//console.log(playerStats("Jason Terry"));

function bigShoeRebounds() {
  // Build a function, bigShoeRebounds, that will return the number of
  // rebounds associated with the player that has the largest shoe size.
  //
  // Break this one down into steps:
  // First, find the player with the largest shoe size
  // Then, return that player's number of rebounds
  // Remember to think about return values here. Use debugger to drop into your
  // function and understand what it is returning and why.
  const biggestShoe = Object.values(players).sort((a, b) => {
    if (a.shoe > b.shoe) {
      return -1;
    } else if (a.shoe < b.shoe) {
      return 1;
    } else {
      return 0;
    }
  })[0];

  return biggestShoe.rebounds;
}
//console.log(bigShoeRebounds());
