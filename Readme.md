## Setup MongoDB 

### Steps

* `npx express-generator`
* `npm install`
* `npm install nodemon`
* `"dev":"nodemon ./bin/www"` add to scripts

<br>

* `npm install dotenv`
* create .env <br>
`PORT=4000 
MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>.auajvjv.mongodb.net/?retryWrites=true&w=majority` 
* <a href='https://github.com/TheMIU/mongo-crud/commit/f7c78d903e7c66d1cbfeb173398879d9556739b3'> .env config </a>

<br>

* `npm install mongoose`
* <a href='https://github.com/TheMIU/mongo-crud/commit/9d656bc4f5bae7e8e0fe6e05a5e21d09b54f55f8'> mongo db connect </a>