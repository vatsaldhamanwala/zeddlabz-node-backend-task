# zeddlabz-node-backend-task
- This repository contains a simple Node.js backend service built as part of the ZeddLabz Junior Developer (Intern) assignment.
- The project demonstrates basic REST API development, in-memory data handling, error handling, and testing using Express and Mocha.

-> Tech Stack:- 
    - Node.js (v18+), Express.js, Mocha + Chai (for testing), Supertest (for API testing)

- In-memory data storage (no database)

-> Features Implemented:- 
    API Endpoints
    GET /
    Health check endpoint
    { "message": "Server is running successfully" }

  - GET /users
      Returns a list of all users stored in memory.

  - POST /users
      Adds a new user,
      Validation: name is required, role is required

  -GET /communities/:id :- Returns community details along with full member information.


-> DSA Utility:- 
  findCommonMembers(arr1, arr2) (Accepts two arrays)
    Test case 1:-  Common elements if they exist,
    Test case 2:- [] if no common elements are found
    Test case 3:- [] if one or both arrays are empty
  

-> How to Run the Project:- 
1. Install dependencies:- npm install

2. Start the server:- npm start

The server will run on:- http://localhost:4000

->How to Run Tests:- npm test


- All tests cases pass successfully.

-> Testing Coverage:- 

  - DSA utility function (findCommonMembers)
  - API endpoint (GET /users)

-> Time Taken:- Total time taken: 5 hours 18 minutes

    
Notes:- 
  - No database is used; all data is stored in memory as per the assignment instructions.
  - No boilerplates or scaffolding tools were used.
  - The project strictly follows the constraints and requirements provided in the task PDF.
