import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import categories from './category/router';
const mongoose = require('mongoose');
import colors from 'colors';
import state  from './category/router';

const staticFilesPath = path.resolve(__dirname, '../folderImg');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(/^(?!\/api\/)/i, express.static(staticFilesPath));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, 'public')));

// app.get('/hello', (request, response) => {
//     response.send('<h1>Hello Express!</h1>');
// });

const PORT = process.env.PORT || 3000;

app.use('/api/categories', state);
app.use('/auth', categories);
app.use(categories);
app.use(state);

const startServer = async () => {
    try {
        await mongoose.connect('mongodb+srv://dbMax:dbMax@cluster0.qj6by.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        app.listen(PORT, () => {
            console.log(colors.bgGreen.white(`Server started on port ${PORT}`));
        });
    } catch(e) {
        console.log(e);
    }
}

startServer();
