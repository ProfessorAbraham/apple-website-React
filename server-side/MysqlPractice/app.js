const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
let corsOptions = {
  origin: ["http://www.evangadi.com", "http://localhost:3000"],
  optionSuccessStatus: 200,
};
//for security reasons
app.use(cors(corsOptions));
//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "apple_db",
  password: "",
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully connected to MySQL.");
  }
});

app.get("/install", (req, res) => {
  let product = `CREATE TABLE IF NOT EXISTS products (
      product_id INT AUTO_INCREMENT,
      product_url VARCHAR(255),
      product_name VARCHAR(255),
    //   product_description VARCHAR(255),
    //   monthly_plan VARCHAR(150),
      PRIMARY KEY(product_id)
  )`;

  let ProductDes = `CREATE TABLE IF NOT EXISTS productdescription (
      description_id INT AUTO_INCREMENT,
      product_id INT,
      product_brief_description TEXT,
      product_description TEXT,
      product_image VARCHAR(255),
      product_link VARCHAR(255),
      FOREIGN KEY(product_id) REFERENCES products(product_id),
      PRIMARY KEY(description_id)
  )`;

  let ProductPrice = `CREATE TABLE IF NOT EXISTS productprice (
      price_id INT AUTO_INCREMENT,
      product_id INT,
      starting_price VARCHAR(255),
      price_range VARCHAR(255),
      FOREIGN KEY (product_id) REFERENCES products(product_id),
      PRIMARY KEY (price_id)
  )`;

  let orders = `CREATE TABLE IF NOT EXISTS orders (
      order_id INT AUTO_INCREMENT,
      product_id INT,
      user_id INT,
      FOREIGN KEY (user_id) REFERENCES user(user_id),
      PRIMARY KEY (order_id)
  )`;

  let user = `CREATE TABLE IF NOT EXISTS user (
      user_id INT,
      User_name VARCHAR(255),
      user_password VARCHAR(255),
      PRIMARY KEY(user_id)
  )`;
  mysqlConnection.query(product, (error, results, fields) => {
    if (error) throw error;
    else {
      console.log("product table created");
    }
  });

  mysqlConnection.query(ProductDes, (error, results, fields) => {
    if (error) throw error;
    else {
      console.log("productdescription table created");
    }
  });

  mysqlConnection.query(ProductPrice, (error, results, fields) => {
    if (error) throw error;
    else {
      console.log("productprice table created");
    }
  });

  mysqlConnection.query(user, (error, results, fields) => {
    if (error) throw error;
    else {
      console.log("user table created");
    }
  });

  mysqlConnection.query(orders, (error, results, fields) => {
    if (error) throw error;
    else {
      console.log("orders table created");
    }
  });

  res.send("Tables Created");
});

app.post("/addiphones", (req, res) => {
  // console.log(bodyparser.json);
  console.log(req.body);

  let Id = req.body.iphoneId;
  // let productURL = req.body.product_url;
  let img = req.body.imgPath;
  let Url = req.body.iphoneLink;
  let Title = req.body.iphoneTitle;
  let Brief = req.body.briefDescription;
  let StartPrice = req.body.StartPrice;
  let PriceRange = req.body.priceRange;
  let Description = req.body.fullDescription;

  // To use it as a foreign key
  let addedProductId = 0;

  let sqlAddToProducts =
    "INSERT INTO Products ( product_url, product_name) VALUES ('" +
    Id +
    "', '" +
    Title +
    "' )";

  mysqlConnection.query(sqlAddToProducts, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  mysqlConnection.query(
    "SELECT * FROM Products WHERE product_url = '" + Id + "' ",
    (err, rows, fields) => {
      addedProductId = rows[0].product_id;
      console.log(addedProductId);
      if (err) console.log(err);

      if (addedProductId != 0) {
        let sqlAddToProductDescription =
          "INSERT INTO Productdescription (product_id, product_brief_description, product_description, product_image, product_link) VALUES ('" +
          addedProductId +
          "', '" +
          Brief +
          "', '" +
          Description +
          "', '" +
          img +
          "', '" +
          Url +
          "' )";

        let sqlAddToProductPrice =
          "INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('" +
          addedProductId +
          "', '" +
          StartPrice +
          "', '" +
          PriceRange +
          "')";

        mysqlConnection.query(
          sqlAddToProductDescription,
          function (err, result) {
            if (err) throw err;
            console.log("Product description inserted");
          }
        );

        mysqlConnection.query(sqlAddToProductPrice, function (err, result) {
          if (err) throw err;
          console.log("Product price inserted");
        });
      }
    }
  );
  res.end("Product added");
});
//Get all iphones
app.get("/iphones", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM Products JOIN Productdescription JOIN ProductPrice ON Products.product_id = Productdescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows, fields) => {
      //console.log("fields", fields);
      let iphones = { products: [] };
      iphones.products = rows;
      let stringIphones = JSON.stringify(iphones);
      if (!err) res.end(stringIphones);
      else console.log(err);
    }
  );
});

app.listen(2020, () => console.log("Server running on port 2020"));
