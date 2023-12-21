

## Table Of Contents


 

 - About   
 - Project Dependency  
 - How To Run  
 - Description   
 - Sample Request and Response


 
 

## About

 A CRUD operation for admin's panel of an e-learning project  using Node.JS, Express.JS and mongoDB
 

## Project Dependency

 This project is developed using Node.Js, Express.JS and MongoDB. The node modules for can be found in package.json file
 

 

## How To Run

 
To run this project you need to:
1. Git clone this using this command:
	

    git clone https://github.com/MubashirZahid/Rainier-Technologies.git

 
2. Then open cmd prompt and type  `cd project-path`
3. Then install node-modules using `npm i`
4. Then create a `.env`  file and give this

	

    DATABASE_URL = Your mongoDB atlas password/rainier-tech
	

    SECRET_KEY = "Your Secret Key"
	
6. Finally, run the project using `npx nodemon app.js` 
	
 

## Description

An admin can:

 - Login to the system 
 - Create a course
 -  Get a list of all courses 
 - Get a specific course by ID 
 - Update an existing course 
 - Delete a course

## Sample Request and Response

Request

    curl --location 'http://127.0.0.1:8000/course/api/getOneCourseById/6582a754cb819f2391107714' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiWmFoaWQiLCJlbWFpbCI6InphaGlkQGdtYWlsLmNvbSIsInJvbGUiOjEsIl9fdiI6MCwiaWF0IjoxNzAzMTY0MTcwLCJleHAiOjE3MDMxNjc3NzB9.fYa782AXV05ZE4Ms9T-ernuGd7Y49XRslO1-lXx68P8'

Response

    {
        "success": true,
        "message": "Course retrieved successfully",
        "data": {
            "schedule": {
                "startDate": "2023-02-15T00:00:00.000Z",
                "endDate": "2023-04-10T00:00:00.000Z",
                "classDays": [
                    "Monday",
                    "Wednesday",
                    "Friday"
                ],
                "classTime": "18:00 - 20:00"
            },
            "_id": "6582a754cb819f2391107714",
            "name": "Introduction to Web Development",
            "description": "A Comprehensive Introduction to Web Development.",
            "price": 5000,
            "duration": "8 weeks",
            "level": "Beginner",
            "topics": [
                "HTML",
                "CSS",
                "JavaScript",
                "Vue.js",
                "Node.js",
                "Express.js",
                "RESTful APIs"
            ],
            "__v": 0
        }
    }
