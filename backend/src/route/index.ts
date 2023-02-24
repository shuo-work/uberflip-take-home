import { Router, Request, Response } from "express";

import countriesRouter from "./countriesRouter";
import registerRouter from "./registerRouter";
import loginRouter from "./loginRouter";
import jwtChecker from "../middleware/jwtChecker";
import tokenRouter from "./tokenRouter";

const routes = Router();

routes.get('/', (req: Request, res: Response) =>{
    res.send("Hello, World!");
});

routes.use(loginRouter);
routes.use(registerRouter);
routes.use(tokenRouter);

routes.use(jwtChecker);
routes.use(countriesRouter);

export default routes;