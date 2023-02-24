import pool from "../config/db";

const getAllCountriesQuery = () => {
    return pool.query('select * from countries');
}

const getCountryByNameQuery = (country: string) => {
    return pool.query('select * from countries where country_name = $1', [country]);
}

export {
    getAllCountriesQuery,
    getCountryByNameQuery,
};
 