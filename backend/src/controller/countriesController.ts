import { Request, Response } from "express";

import { getAllCountriesQuery, getCountryByNameQuery } from "../query/countriesQuery";

const getCountryByName = async (req: Request, res: Response) => {
    try {
        const { params } = req;
        const { country } = params;
        const data = await getCountryByNameQuery(country);
        res.send(data.rows);
    } catch (err) {
        res.status(500).send('get country by name failed');
    }
}

const getAllCountries = async (req: Request, res: Response) => {
    try {
        const data = await getAllCountriesQuery();
        res.send(data.rows);
    } catch (err) {
        res.status(500).send('get all countries failed');
    }
}

export {
    getAllCountries,
    getCountryByName,
};
