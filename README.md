# Task management

Video demo: https://drive.google.com/file/d/1U-zhC0wdDXrMd3rm12j_AxKJmzn1-NBS/view?usp=sharing

I used https://github.com/brocoders/nestjs-boilerplate for the backend boilerplate and https://github.com/brocoders/extensive-react-boilerplate for the frontend boilerplate.

How to set up:

Please excuse the lack of monorepo, I didn't have the time to get one properly set up and tested.

`git clone https://github.com/sarahsprojects/task-manager-be.git task-manager-be && cd task-manager-be && npm install`

`cp env-example-relational .env`

Then replace with your database access variables in file `.env`

`npm run dev` will run the backend.

Next, clone and run the frontend

`git clone https://github.com/sarahsprojects/task-manager-fe.git task-manager-fe && cd task-manager-fe && npm install`

Files of concern:

Backend: https://github.com/sarahsprojects/task-manager-be
-- Backend files I wrote all here: https://github.com/sarahsprojects/task-manager-be/tree/main/src/tasks 

Frontend:
-- Frontend UI files: https://github.com/sarahsprojects/task-manager-fe/tree/main/src/app/%5Blanguage%5D/task-manager
-- Frontend Hooks: https://github.com/sarahsprojects/task-manager-fe/tree/main/src/hooks

Functionality
* Create a task
* Update a task
* Delete a task
* Get a list of tasks
* Task history in modal
* Local filtering, local searching

I’m respecting the time constraints so here’s what I didn’t get to complete but wanted to do:

* I wanted to make monorepo structure with shared type packages between frontend and backend - just didn’t have the time to work it out and test. The backend and frontend are separated for scalability but the monorepo structure would have shared the types allowing for more coupled typing without repeated code.
* I implemented the task_history database in the backend, but wanted a more graceful interface to show it.
* Didn’t get to implement API pagination but it looked super cool in the NestJS docs.
* I wanted to use the boilerplate’s sign in structure and have tasks tied to logged in users, but time constraints.
* I wanted to implement a server side search and filter but couldn’t due to time constraints. I would have hooked it up to the api call to get the tasks.
* I’m usually known for my 100% test coverage where I work, but I didn’t get to the tests.