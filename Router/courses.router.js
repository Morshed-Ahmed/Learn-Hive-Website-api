const express = require("express");
const coursesController = require("../Controller/courses.controller");

const router = express.Router();

router.route("/").post(coursesController.postCourse);
router.route("/").get(coursesController.getCourse);
router.route("/:category").get(coursesController.findCourse);
router.route("/single/:id").get(coursesController.singleCourse);

module.exports = router;
