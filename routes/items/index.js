// load dependencies
var express = require('express');
var router = express.Router();

// define data
let data = [{
  id: 0,
  name: `Steve Jobs`,
  information: {
    city: `San Francisco`,
    phone: `081263547`,
    company: `Apple`
  }
}, {
  id: 1,
  name: `Linus Torvalds`,
  information: {
    city: `New York`,
    phone: `081362447`,
    company: `Git`
  }
}, {
  id: 2,
  name: `Bill Gates`,
  information: {
    city: `Sillicon Valley`,
    phone: `0812612744`,
    company: `Microsoft`
  }
}];

// GET all items
router.get(`/`, (req, res) => {
  res.send({
    message: `Here's your data`,
    data: data
  });
});

// GET single item
router.get(`/:id`, (req, res) => {
  const items = data;
  const itemId = Number(req.params.id);
  const item = items.filter(item => {
    return item.id === itemId;
  });
  res.send({
    message: `Get data through by id`,
    data: item
  });
})

// POST an item
router.post(`/`, (req, res) => {
  const item = {
    id: data.length,
    name: req.body.name,
    city: req.body.city,
    phone: req.body.phone,
    company: req.body.company

  };
  data.push(item);
  res.send({
    message: `New data was added`,
    data: data
  });
});

// DELETE an item
router.delete(`/:id`, (req, res) => {
  let items = data;
  let itemId = Number(req.params.id);
  let currentData = items.filter(item => {
    return item.id !== itemId;
  });
  data = currentData;
  res.send({
    message: `An item was deleted`,
    data: data
  });
});

// DELETE all items
router.delete(`/`, (req, res) => {
  data.splice(0, data.length);
  res.send({
    message: `All items was deleted`,
    data: data
  });
});

// UPDATE an item
router.put(`/:id`, (req, res) => {
  let id = Number(req.params.id);
  let name = req.body.name;
  let city = req.body.city;
  let phone = req.body.phone;
  let company = req.body.company;

  // Find data index
  let itemIndex = data.findIndex((item, index) => {
    return item.id === id;
  });

  // Matching matched data
  data[itemIndex][`name`] = name;
  data[itemIndex][`city`] = city;
  data[itemIndex][`phone`] = phone;
  data[itemIndex][`company`] = company;

  let response = {
    message: `Data was updated through by id`,
    data: data
  };

  res.send(response);

});

module.exports = router;