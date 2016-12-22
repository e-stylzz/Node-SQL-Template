var config = {
    username: process.env.username || 'username_here',
    password: process.env.password || 'password_here',
    host: process.env.host || 'hostname_here.database.windows.net',
    db: process.env.db || 'db_name_here',
    dialect: 'mssql',
    port: process.env.port || 1433
}

module.exports = config;