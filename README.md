# Task Management

## Screenshots

<img width="1133" alt="Task Manager Screenshot 1" src="https://github.com/user-attachments/assets/1b259a26-7e67-42a9-81f6-69e27e5b96a5" />
<img width="1129" alt="Task Manager Screenshot 2" src="https://github.com/user-attachments/assets/c53a9bdd-3458-4ce4-912c-08edda88e24c" />

## Video Demo
🎥 [Watch the demo](https://drive.google.com/file/d/1U-zhC0wdDXrMd3rm12j_AxKJmzn1-NBS/view?usp=sharing)

## Tech Stack

I used the following boilerplates:

- **Backend**: [Brocoders NestJS Boilerplate](https://github.com/brocoders/nestjs-boilerplate)
- **Frontend**: [Brocoders Extensive React Boilerplate](https://github.com/brocoders/extensive-react-boilerplate)

---

## 🚀 Setup Instructions

> _Please excuse the lack of a monorepo; I didn’t have time to set one up and test it properly._

### 1️⃣ Clone & Setup Backend

```sh
git clone https://github.com/sarahsprojects/task-manager-be.git task-manager-be
cd task-manager-be
npm install
```

`cp env-example-relational .env`

Then update .env with your database access credentials.

Start the backend:

`npm run dev``


### 2️⃣ Clone & Setup Frontend

Next, clone and run the frontend in another terminal

```sh
git clone https://github.com/sarahsprojects/task-manager-fe.git task-manager-fe 
cd task-manager-fe
npm install
```

### 📂 Files of Interest

### Backend
- **Task-related backend NestJS files:** [src/tasks](https://github.com/sarahsprojects/task-manager-be/tree/main/src/tasks)

### Frontend
- **UI components:** [task-manager UI files](https://github.com/sarahsprojects/task-manager-fe/tree/main/src/app/%5Blanguage%5D/task-manager)
- **Custom hooks:** [task-manager hooks](https://github.com/sarahsprojects/task-manager-fe/tree/main/src/hooks)

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