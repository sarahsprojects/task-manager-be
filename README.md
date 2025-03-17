# Task management

I used https://github.com/brocoders/nestjs-boilerplate for the backend boilerplate and https://github.com/brocoders/extensive-react-boilerplate for the frontend boilerplate.

Please excuse the lack of monorepo, I didn't have the time to get one properly set up and tested.

Backend: https://github.com/sarahsprojects/task-manager-be
-- Backend files: 

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

* I wanted to make monorepo structure with shared type packages between frontend and backend - just didn’t have the time to work out and test. The backend and frontend are separated for scalability but the monorepo structure would have shared the types allowing for stricter typing.
* I implemented the task_history database in the backend, but wanted a more graceful interface to show it.
* Didn’t get to implement API pagination but it looked super cool in the NestJS docs.
* I wanted to use the boilerplate’s sign in structure and have tasks tied to logged in users, but time constraints.
* I wanted to implement a server side search but couldn’t due to time constraints. I would have hooked it up to the api call to get the tasks
* I’m usually known for my 100% test coverage where I work, but I didn’t get to the tests.