import express, { urlencoded } from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import connect from './database/db.js';
import cors from 'cors';
connect();

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(express.json()); // middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    console.log("dummy router is connected");
    res.send("Server is working fine ✅");

});

export default app;

