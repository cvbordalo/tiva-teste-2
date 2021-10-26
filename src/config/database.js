module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'tiva_app',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
