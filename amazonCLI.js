var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "amazon_db",
    user: "root",
    password: "<%alucard81%>"
});

connection.connect(function (err) {
    if (err) throw err;
    displayAll();
});

function displayAll() {
    connection.query("SELECT item_id, product, price FROM items", function (err, res) {
        if (err) throw err;
        var newline = ("\n\n========================================\n")
        for (var i = 0; i < res.length; i++) {
            console.log(` ID: ${res[i].item_id} \n Product: ${res[i].product_name} \n Price: $${res[i].price} ${newline}`)
        };

    });
}

