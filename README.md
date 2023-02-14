### Project Diary
To help better express my train of thought while developing this project I will update this diary as I go along. I will also try to keep it in chronological order.

#### Day 1
Before starting the project I skimmed through NestJS documentation to refresh my knowledge, and make sure I have a general idea of the project architecture and plan based on the requirements.

My approach is usually by just making something "work" and then iterate on it to make it better. So please don't mind any weird code or bad practices initially :)


#### Day 2 (~ 1 hour)
I started by creating a new NestJS project and adding the required dependencies . I also created a basic structure for the project, and used the nest cli to quickly generate the required modules and controllers.

For tomorrow, I plan to configure TypeORM with Sqlite and create the migrations. After that I can update the entities to match migrations columns and relations properly. And finally i can actually fetch the data from the database and return it in the controllers.

#### Day 3 (~ 1.5 - 2 hours)
I configured TypeORM with a local MySql docker and updated the entities with TypeORM annotations. After that I was able to implement the repositories queries in the services.
Other then that, I spent a lot of time trying to make migrations to work but with no luck for now, I put that aside for now and will try to fix it later. I also spent some time with a seeder library to help with testing, but it seems to be more trouble than it's worth for now.

For tomorrow, I plan to get the migrations to work properly (since I am not that familiar with TypeORM, I might search for simpler migration tool).Also, I would like think of another way to generate random data on the fly to get the bonus points (probably a faker implementation of the repositories and inject that somehow).