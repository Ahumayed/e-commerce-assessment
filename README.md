### Project Diary
To help better express my train of thought while developing this project I will update this diary as I go along. I will also try to keep it in chronological order.

#### Day 1
Before starting the project I skimmed through NestJS documentation to refresh my knowledge, and make sure I have a general idea of the project architecture and plan based on the requirements.

My approach is usually by just making something "work" and then iterate on it to make it better. So please don't mind any weird code or bad practices initially :)


#### Day 2 (~ 1 hour)
- Started by creating a new NestJS project and adding the required dependencies.
- Created a basic structure for the project, and used the nest cli to quickly generate the required modules and controllers.

For tomorrow, I plan to configure TypeORM with Sqlite and create the migrations. After that I can update the entities to match migrations columns and relations properly. And finally i can actually fetch the data from the database and return it in the controllers.

#### Day 3 (~ 1.5 - 2 hours)
- Configured TypeORM with a local MySql docker and updated the entities with TypeORM annotations.
- Implemented the repositories queries in the services.
  
Other then that, I spent a lot of time trying to make migrations to work but with no luck for now, I put that aside for now and will try to fix it later. I also spent some time with a seeder library to help with testing, but it seems to be more trouble than it's worth for now.

For tomorrow, I plan to get the migrations to work properly (since I am not that familiar with TypeORM, I might search for simpler migration tool).Also, I would like think of another way to generate random data on the fly to get the bonus points (probably a faker implementation of the repositories and inject that somehow).

#### Day 4 (~2  hour)
- Fixed migrations.
- Added factories to generate random data easliy with faker-js.
- Added a seeder to generate random data for testing.
- Added NestJS default cache interceptor to cache the results of the controllers.

For the last day, I plan clean up the controllers responses and add validations. And finally create both Dockerfile and docker-compose.yml to run the project. And of course do a final review of the project and refactor if needed.