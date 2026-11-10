import express from "express";
const app = express();
const port = 3000;

//how to accept data from frontend
//the most common way
app.use(express.json());

//lets create an array which stores some data
let task = [];
let nextId = 1;

//standard way of storing data in db is by using post request
app.post("/tasks", (req, res) => {
  //from the req data we can extract the data
  const { name, priority } = req.body;
  //lets create an object to store the data in db
  const newTask = { id: nextId++, name, priority };
  task.push(newTask);
  res.status(201).send(newTask);
});

//Display the data
app.get("/tasks", (req, res) => {
  res.status(200).send(task);
});

//how to get a single tea
app.get("/tasks/:id", (req, res) => {
  const Existingtask = Existingtask.find(
    (t) => t.id === parseInt(req.params.id),
  );
  if (!Existingtask) {
    return res.status(404).send("Task not found");
  }
  res.status(200).send(Existingtask);
});

//Updating the existing task we will be needing the id
app.put("/tasks/:id", (req, res) => {
  //first grab the id
  const Existingtask = Existingtask.find(
    (t) => t.id === parseInt(req.params.id),
  );
  if (!Existingtask) {
    return res.status(404).send("Task not found");
  }
  //we have to also send the data we want to update
  const { name, priority } = req.body;
  task.name = name;
  task.priority = priority;
  res.send(200).send(Existingtask);
});

app.listen(port, () => {
  console.log(`server is running: ${port}`);
});
