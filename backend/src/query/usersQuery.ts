import pool from "../config/db";

const getUserByEmailQuery = (email: string) => {
    return pool.query('select * from users where email = $1', [email]);
}

const createUserQuery = ({firstName, lastName, email, encryptedPassword}: any) => {
    return pool.query(
        'insert into users (first_name, last_name, email, password) values ($1, $2, $3, $4)',
        [firstName, lastName, email, encryptedPassword]
    );
}

export {
    createUserQuery,
    getUserByEmailQuery,
 };