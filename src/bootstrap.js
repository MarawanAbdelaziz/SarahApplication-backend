import connectDB from "../DB/connection.js";
import authorRouter from "./modules/author/authors.routes.js";
import bonusRouter from "./modules/bonus/bonus.routes.js";
import bookRouter from "./modules/books/books.routes.js";

function bootstrap(app, express) {
  connectDB();
  app.use(express.json());
  app.use("/author", authorRouter);
  app.use("/book", bookRouter);
  app.use("/bonus", bonusRouter);
}

export default bootstrap;
