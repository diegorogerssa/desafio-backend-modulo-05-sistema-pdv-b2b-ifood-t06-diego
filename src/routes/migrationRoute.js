const express = require(express)

const {createMigrations} = require("../migrations/index")

const migration = express.Router()

migration.post("/migration", createMigrations)

module.exports = migration