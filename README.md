# Quote-API
node Js microservice

There are 4 endpoints.

To use follow below steps:

1) Clone Project.
2) run $npm install
3) npm start

Server will be serving on port 5000.

Try hiting the endpoints.

1)GET   http://localhost:5000/quotes --> to get all the saved quotes (initially zero).
2)POST http://localhost:5000/quotes
request body JSON 
{
  "quote" : "Good Morning!!!",
  "sender" : "Your Name",
  }
 
 3)GET http://localhost:5000/quotes/<id> --> to get only details of requested Id.
  e.g. http://localhost:5000/quotes/2
  
  4)PATCH http://localhost:5000/quotes/<id> --> to update particular quote details
  request body same as POST request body
  e.g. only want to update sender name 
  http://localhost:5000/quotes/2
  {
 
  "sender" : "ABCD XYZ"
  }
  
 5)DELETE http://localhost:5000/quotes/<id> --> to delete quote of requested Id.
