var connection = require('./connection.js');


var orm = {
    // Select all burgers from the table
    all: function (tableInput, cb) {
        connection.query('SELECT * FROM  ' + tableInput + ';', function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

     // update burgers  to set devoured = true , where id = "condition";
    update: function (tableInput, condition, cb) {
        connection.query('UPDATE ' +tableInput+ ' SET devoured = true where id=' +condition+ ';', function(err,result){
            if (err) throw err;
            cb(result);
        })    
    },

    // create a new burger with name contained in "val"
    create: function(tableInput, val, cb){
        connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", function(err,result){
          if(err) throw err;
            cb(result);
        })
    },
}

module.exports = orm;