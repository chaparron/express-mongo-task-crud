import Task from "../models/Task.js";

export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks });
};

export const postTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
  } catch (error) {
    console.log(error);
  } finally {
    res.redirect("/");
  }
};

export const renderTask = async (req, res) => {
  const task = await Task.findById(req.params.id).lean();
  res.render("edit", { task });
};

export const editTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};

export const toggleDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};
