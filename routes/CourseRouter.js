const express = require("express");
const router = express.Router();
const CourseController = require("../controller/CourseController");

const { isAuthorized, isAdmin } = require("../middleware/authValidation");

// Create a course
router.post(
  "/api/createCourse",
  isAuthorized,
  isAdmin,
  CourseController.createCourse
);

// Get All Courses
router.get("/api/getAllCourses", CourseController.getAllCourses);

// Get One Course By Id
router.get("/api/getOneCourseById/:courseId", 
  isAuthorized,
  isAdmin,
  CourseController.getOneCourseById
);

// Update a Course By ID
router.patch(
    "/api/updateCourse/:courseId",
    isAuthorized,
    isAdmin,
    CourseController.partialUpdateById
);

// Delete a Course By ID
router.delete(
    "/api/deleteCourse/:courseId",
    isAuthorized,
    isAdmin,
    CourseController.deleteById
);



module.exports = router;
