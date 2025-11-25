// Core Modules
const { getDB } = require('../utils/databaseUtil');

module.exports = class Home {
  constructor(housename, price, location, rating, photourl, description, id) {
    this.housename = housename;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photourl = photourl;
    this.description = description;
    this.id = id;
  }

  save() {
      const db = getDB();
      db.collection('homes').insertOne(this);
  }

  static fetchAll() {
   
  }

  static findById(homeId) {
   
  }

  static deleteById(homeId) {
    
  }
};
