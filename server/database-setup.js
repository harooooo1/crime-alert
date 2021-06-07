const Sequelize = require("sequelize");
const dataPopulators = require("./seed-data");

const crime_alert = new Sequelize("crime_alert", "root", "haroorah1", {
  host: "localhost",
  dialect: "mysql",
  // dialect: "sqlite",
  // storage: "./server/database.sqlite",
  pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
  // operatorsAliases: false,
});

// Model definition
const User = crime_alert.define("User", {

  id: {
    type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
  },
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  totalWins: Sequelize.INTEGER,
  authToken: Sequelize.STRING,
  isBanned: Sequelize.BOOLEAN, // 0 or 1, default 0
  isAdmin: Sequelize.BOOLEAN, // 0 or 1, default 0

});

const Post = crime_alert.define("Post", {

  id: {
    type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
  },
  text: Sequelize.STRING,
  photo: Sequelize.STRING, // placeholder for post image / thumbnail
  state: Sequelize.BOOLEAN // 0 for shown, 1 for hidden

});

const Image = crime_alert.define("Image", {

  type: Sequelize.STRING,
  name: Sequelize.STRING,
  data: Sequelize.BLOB("long")

});

const Game = crime_alert.define("Game", {

  id: {
    type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
  },
  title: Sequelize.STRING,
  currentPlayers: Sequelize.INTEGER, // number of players in the game room
  maxPlayers: Sequelize.INTEGER,
  gameState: Sequelize.TINYINT, // 0 - in lobby, 1 - started, 2 - finished
  winner: Sequelize.STRING, // who won

});

const Player = crime_alert.define("Player", {

  playerNumber: Sequelize.INTEGER, //players number inside the game (example: player1, player2 etc....)
  playerName: Sequelize.STRING      // username pulled from user table

});

//Hello.hasOne(Hello2);
//Hello2.belongsTo(Hello);

User.hasMany(Post);
Post.belongsTo(User);
Post.hasOne(Image);


User.hasMany(Game);
User.belongsToMany(Game, { through: Player });
Game.belongsToMany(User, { through: Player });
//Project.belongsToMany(User, { through: UserProjects });

// INIT DB ENTITY MODELS
(async function () {

  const FORCE_RECREATE_MODELS = false;
  const DO_SYNC = true;

  // Drop tables in order to avoid foreign key constraint issues
  if (FORCE_RECREATE_MODELS) {
    User.drop();
    Post.drop();
    Image.drop();
    Game.drop();
    Player.drop();
  }
  // Sync models
  if (DO_SYNC) {
    await User.sync({ force: FORCE_RECREATE_MODELS });
    await Post.sync({ force: FORCE_RECREATE_MODELS });
    await Image.sync({ force: FORCE_RECREATE_MODELS });
    await Game.sync({ force: FORCE_RECREATE_MODELS });
    await Player.sync({ force: FORCE_RECREATE_MODELS });
  }

  // repopulate the db with predefined data
  /*if (FORCE_RECREATE_MODELS) {
    //  dataPopulators.mockHelloData(Hello);
    //  dataPopulators.mockHello2Data(Hello2);
  } */
})();

module.exports.User = User;
module.exports.Post = Post;
module.exports.Image = Image;
module.exports.Game = Game;
module.exports.Player = Player;
module.exports.crime_alert = crime_alert;
