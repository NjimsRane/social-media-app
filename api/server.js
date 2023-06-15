import express from 'express';
import authsRouter from './router/auths.js';

const app = express();

// middlewaress
app.use(express.json());

app.use('/api/auths', authsRouter);



app.listen(8080, () => {
    console.log('The backend is connected!');
});