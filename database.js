var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "graffiti.db"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        
        db.run(`CREATE TABLE User (
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_name text UNIQUE, 
            user_password text
            )`,
        (err) => {
            if (err) {
                console.error(err.message)
                // Table already created
            }else{
                // Table just created, creating some rows
                console.log('Create table User.')
                var insert = 'INSERT INTO User (user_name, user_password) VALUES (?,?)'
                db.run(insert, ["admin", md5("123456")])
                db.run(insert, ["user", md5("123456")])
            }
        });  
    }
});


module.exports = db