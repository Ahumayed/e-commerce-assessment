This is a simple NestJS project that implements a simple CRUD API for an e-commerce application with products and categories.

It was mostly a learning project for me to get familiar with NestJS and TypeORM, and I tried to keep it simple.

PS: There are some missing validations and error handling for the controllers, might be added later.
### To run the project:
``` npm install --force ```

``` npm run start:dev ```

Also can run simply using docker-compose:
``` docker-compose up -d```

### To run migrations + seeder:
``` npm run migration:run ```
``` npm run seed:run ```

This should create the database and populate it with some random data.

### To use the API:
The default NestJS CRUD apis is available at http://localhost:3000/products and http://localhost:3000/categories

You can use Postman or any other tool to test the API.

Finally, I would like to thank you for the opportunity to work on this project, and I am looking forward to your feedback.

### Project Diary
Check the `Project Diary.md` file for more details about the project and the decisions I made.