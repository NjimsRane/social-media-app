import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/users.js';
import authsRouter from './routes/auths.js';
import likesRouter from './routes/likes.js';
import commentsRouter from './routes/comments.js';
import postsRouter from './routes/posts.js';


const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use('/api/users', userRouter);
app.use('/api/auths', authsRouter);
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/likes', likesRouter);


app.listen(8080, () => {
    console.log('API is working');
});