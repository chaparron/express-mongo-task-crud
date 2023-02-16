import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes.js";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    // partialsDir: path.join(app.get('views'), 'porciones'),
    // si usamos partials que es el nombre por defecto no hace falta
    defaultLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
// Módulo de express para entender lo que viene de los formularios

app.use(indexRoutes);

app.use(express.static(path.join(__dirname, "public")));

export default app;
