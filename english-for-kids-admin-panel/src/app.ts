import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import categories from './category/router';
const mongoose = require('mongoose');

const staticFilesPath = path.resolve(__dirname, '../folderImg');

const users = [
    {
        username: 'admin', password: 'admin'
    }
]

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(/^(?!\/api\/)/i, express.static(staticFilesPath));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/api/categories', categories);
app.use('/auth', categories);

const startServer = async () => {
    try {
        await mongoose.connect('mongodb+srv://dbMax:dbMax@cluster0.qj6by.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch(e) {
        console.log(e);
    }
}

startServer();
