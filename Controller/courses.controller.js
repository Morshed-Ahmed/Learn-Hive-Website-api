const Courses = require("../Models/Courses");

exports.postCourse = async (req, res) => {
  try {
    const result = await Courses.create(req.body);
    res.status(200).json({
      successful: true,
      message: "Data create successfully",
      //   data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const result = await Courses.find({});
    res.status(200).json({
      successful: true,
      //   message: "Data create successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      //   message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.singleCourse = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(category);
    const result = await Courses.find({ _id: id });
    res.status(200).json({
      successful: true,
      //   message: "Data create successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      //   message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.findCourse = async (req, res) => {
  try {
    const { category } = req.params;
    // console.log(category);
    const result = await Courses.find({ category: category });
    res.status(200).json({
      successful: true,
      //   message: "Data create successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      //   message: "Data is not inserted",
      error: error.message,
    });
  }
};
