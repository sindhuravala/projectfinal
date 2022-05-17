const mysqlcon = require('../../connection');

//create table products

function create() {
    let sql = `CREATE TABLE IF NOT EXISTS products(
        product_id int(10) primary key,
        img varchar(22),
        product_name varchar(66), 
        price int(10)
        )`;
    mysqlcon.query(sql);
  }

//update initial products

function add() {
    mysqlcon.query('select * from products', function (err, result) {
        if(result.length === 0){ 
            let sqlrun = `insert into products values
            (1, "images/P1.jpg", 'Women black crop top', 20), 
            (2, "images/P2.jpg", 'Olive top', 30),
            (3, "images/P3.jpg", "Mommy jean", 50),
            (4, "images/P4.jpg", "Torn jean", 45),
            (5, "images/P5.jpg", "Men tee", 30),
            (6, "images/P6.jpg", "Skinny jean", 43),
            (7, "images/P7.jpg", "Kurthi", 45),
            (8, "images/P8.jpg", "Lehanga", 200)
            `;
            mysqlcon.query(sqlrun, (err, result) => {
                if(err) throw err;
            });
}
});
}  


  module.exports = {create, add};