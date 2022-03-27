var mysql = require("mysql");

// 创建连接池
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'website'
  });

// 封装方法
// const getConnection = () => {
//     return new Promise((resolve, reject) => {
//         pool.getConnection((err, connection) => {
//             if(err) {
//                 reject(err)
//             } else {
//                 resolve(connection)
//             }
//         })
//     })
// }

const query = (sql, values) => {
    // Promise解决异步问题
    return new  Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                connection.release();
                reject(err)
            }
            connection.query(sql, values, (err, rows) => {
                connection.release();
                if (err) {
                    // connection.release();
                    reject(err)
                }
                resolve(rows);
            })
        })
    })     
        
}

module.exports = query