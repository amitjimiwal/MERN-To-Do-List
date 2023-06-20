import express ,{Express}from 'express';
import bodyParser from 'body-parser';
import connectdatabase from './models/database';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import router from './routes/approutes';

dotenv.config({ path: './config.env' });

connectdatabase();
const app:Express= express();

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', router);

app.listen(process.env.PORT, () => {
  console.log(`Server is started on port ${process.env.PORT}`);
});


