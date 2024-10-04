import express from 'express';
import sequelize from './Database/sequelizeConnection'

const app = express();

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection successful!!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  console
app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});