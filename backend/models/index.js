const { Sequelize } = require("sequelize-cockroachdb");

// Connect to CockroachDB through Sequelize.
const db = new Sequelize({
    dialect: "postgres",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
    logging: false,
});

// Define the Account model for the "accounts" table.
const Account = db.define("accounts", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    balance: {
        type: Sequelize.INTEGER,
    },
});

// Create the "accounts" table.
/*
Account.sync({
    force: true,
})
    .then(function () {
        // Insert two rows into the "accounts" table.
        return Account.bulkCreate([
            {
                id: 1,
                balance: 1000,
            },
            {
                id: 2,
                balance: 250,
            },
        ]);
    })
    .then(function () {
        // Retrieve accounts.
        return Account.findAll();
    })
    .then(function (accounts) {
        // Print out the balances.
        accounts.forEach(function (account) {
            console.log(account.id + " " + account.balance);
        });
        process.exit(0);
    })
    .catch(function (err) {
        console.error("error: " + err.message);
        process.exit(1);
    });
	*/
