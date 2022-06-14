import express from 'express';
import bodyParser from 'body-parser';

import quoteRoutes from './routes/quotes.js'

const app = express();
const PORT = 5000;


app.use(bodyParser.json());

app.use('/quotes',quoteRoutes);

app.get('/',(req,res) => {
    console.log('Test');
    res.send('Hello from home');
})

app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));