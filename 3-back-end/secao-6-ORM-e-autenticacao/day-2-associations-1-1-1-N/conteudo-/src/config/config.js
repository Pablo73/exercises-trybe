const env = process.env.NODE_ENV;

const sequelizeConfig = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": `${process.env.DB_NAME}-${env}`,
  "host": process.env.DB_HOST,
  "dialect": process.env.DB_DIALECT
};

console.log(sequelizeConfig, env);

module.exports = {
  [env]: sequelizeConfig
}
