import { Pool } from 'pg';

const pool = new Pool({
    user: 'user',
    password: 'password',
    database: 'myapp',
    host: 'pg_db',
    port: 5432,
});

export default pool;