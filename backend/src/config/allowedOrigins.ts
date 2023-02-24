const allowedList = [
    'http://localhost:3000',
];

const allowedOrigins = {
    credentials: true,
    origin: (origin: any, callback: any) => {
        if (allowedList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

export default allowedOrigins;