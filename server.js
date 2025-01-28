const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./config/database');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());
app.use('/api', productRoutes);
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}).catch(error => {
    console.error('Unable to sync the database:', error);
});