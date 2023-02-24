import { Router } from 'express';

import { getAllCountries, getCountryByName } from "../controller/countriesController";

const countriesRouter = Router();

countriesRouter.get('/countries', (req, res) => 
    getAllCountries(req, res)
);

countriesRouter.get('/countries/:country', (req, res) => 
    getCountryByName(req, res)
);

export default countriesRouter;