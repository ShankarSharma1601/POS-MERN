const itemModel = require("../models/itemModel");

//get items
const getItemController = async (req, res) => {
  try {
    const items = await itemModel.find();
    console.log(items);
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
  }
};

//add items
const addItemController = async () => {
  try {
    const newItem = new itemModel(req.body);
    await newItem.save();
    res.status(201).send("Items Created Successfully");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

module.exports = { getItemController, addItemController };
