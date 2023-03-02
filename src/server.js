const app = require('./app');
const sequelize = require('./utils/connection')

const PORT = process.env.PORT || 8080;

const main = async() => {
    try{
await sequelize.authenticate();
console.log("DB connected!");
sequelize.sync();
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
    } catch (error) {

    }
}

main()