import connectDB from "../DB/connection.js";
import massageRouter from "./modules/massage/massage.routes.js";
import userRouter from "./modules/uesr/uesr.routes.js";

function bootstrap(app, express) {
  connectDB();
  app.use(express.json());
  app.use("/massage", massageRouter);
  app.use("/user", userRouter);
}

export default bootstrap;
