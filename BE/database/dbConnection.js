import mysql from "mysql2";
export const dbConnection = () => {
  // const db = mysql.createConnection(
  //   "mysql://uohawuvziauqczg3:c8BROKUR8issSOUC3mlS@bt0ylgtpkvc3fpx07y0d-mysql.services.clever-cloud.com:3306/bt0ylgtpkvc3fpx07y0d"
  // );
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "linked_posts",
  });

  db.connect((err) => {
    if (err) {
    } else {
      console.log("Database connected");
    }
  });
  return db;
};
