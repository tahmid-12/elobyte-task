import mysql from 'mysql';
import { dbConfig } from '../configure/config';

const mysqlConnection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

const connect = () => {
    mysqlConnection.connect((err) => {
        if(err){
            console.error('Error connecting to the database:', err);
            return;
        }else{
            console.log('Connected to the MySQL database.');
        }
    })
}

export default { connect };