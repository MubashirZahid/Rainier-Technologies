const express = require("express");
const router = express.Router();
const CourseController = require("../controller/CourseController");

// const { isAdmin } = require("../middleware/authValidation");

// Create a course
router.post(
  "/api/createCourse",
  CourseController.createCourse
);

// Get All Courses
router.get("/api/getAllCourses", CourseController.getAllCourses);



module.exports = router;
