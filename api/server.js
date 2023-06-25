import express from 'express';
import authsRouter from './router/auths.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

// middlewaress
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:5173'
    }
));
app.use(cookieParser());
app.use('/api/auths', authsRouter);



app.listen(8080, () => {
    console.log('The backend is connected!');
});