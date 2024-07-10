import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
};

export const serverConfig = {
    port: process.env.PORT || 3000
};

// export const {
//     dbConfig,
//     serverConfig
// }