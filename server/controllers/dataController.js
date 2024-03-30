import { dataModel } from "../models/dataModel.js";

// getting all data
export const getAllData = async (req, res) => {
  try {
    const allData = await dataModel.find({});
    res.status(200).json(allData);
  } catch (error) {
    res.status(404).json(error);
  }
};

// getting single data
export const getSingleData = async (req, res) => {
  try {
    const { id } = req.params;
    const singleData = await dataModel.find({ _id: id });
    res.status(200).json(singleData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// post a data
export const postData = async (req, res) => {
  try {
    async (req, res) => {
      const postedData = await dataModel.create(req.body);
      res.status(400).json({ error: error.message });
    };
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// edit data
export const editData = async (req, res) => {
  try {
    const { id } = req.params;
    await dataModel.findByIdAndUpdate(id, req.body);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete data
export const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedData = await dataModel.findByIdAndDelete({ _id: id });
    res.status(200).json(deletedData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
