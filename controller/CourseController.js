const Course = require('../model/Course');
const HTTP_STATUS = require('../constants/statusCodes');
const { success, failure } = require('../utils/common');

class CourseController {
  async createCourse(req, res) {
    try {
      const {
        name,
        description,
        price,
        duration,
        level,
        topics,
        schedule
      } = req.body;

      const newCourse = new Course({
        name,
        description,
        price,
        duration,
        level,
        topics,
        schedule
      });

      const savedCourse = await newCourse.save();

      // Returning a success response with the created course data 

      res.status(HTTP_STATUS.CREATED).json(success('The Course has been added successfully', savedCourse));
    } catch (error) {
      // Returning a failure response if there is an error

      console.error('Error creating course:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(failure('Failed to create course', error));
    }
  }

  async getAllCourses(req, res) {
    try {
      // Retrieving all courses from the database
      const allCourses = await Course.find({});

      // Returning a success response with the list of courses 

      res.status(HTTP_STATUS.OK).json(success('All courses retrieved successfully', allCourses));
    } catch (error) {
      // Return a failure response if there is an error 

      console.error('Error retrieving courses:', error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(failure('Failed to retrieve courses', error));
    }
  }
}

module.exports = new CourseController();
