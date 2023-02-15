import { Router } from "express";
import {
  postTask,
  renderTasks,
  renderTask,
  editTask,
  deleteTask,
  toggleDone,
} from "../controllers/task.controller.js";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", postTask);

router.get("/tasks/:id/edit", renderTask);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/toggleDone", toggleDone);

export default router;
