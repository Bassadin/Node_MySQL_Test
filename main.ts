import mysql, { Connection } from "mysql";
import * as dotenv from "dotenv";

dotenv.config();

console.log(process.env.DB_HOST);

const connection: Connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");

    connection.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
