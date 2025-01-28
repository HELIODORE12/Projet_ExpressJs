const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('coursexpress', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});
sequelize.authenticate()
    .then(() => {
        console.log('La connexion a été établie avec succès.');
    })
    .catch(err => {
        console.error('Impossible de se connecter à la base de données:', err);
    });
module.exports = sequelize;