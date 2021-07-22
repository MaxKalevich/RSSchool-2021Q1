import { Router } from 'express';
import { Category } from './category';
import {
    createCategory,
    getCategoriesState, getCategoryById,
     deleteCategoryByCategoryName, createNewCategory
} from './repository';

const controller = require('./../authController');
const router = Router();
const { check } = require('express-validator');
const authMiddleware = require('../middlreware/authMiddleware');
const roleMiddleware = require('../middlreware/roleMiddleware');

router.post('/registration', [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть больше трех и не более десяти символов').isLength({min: 4, max: 10})
], controller.registration);

router.get('/users',roleMiddleware(['ADMIN']), controller.getUsers);

router.post('/login', controller.login);

router.get('/', async (req, res) => {
    const categories = await getCategoriesState();
    res.json(categories);
});

router.get('/:id', async (req, res) => {
    const catId = Number(req.params.id);
    if (!catId) {
       return res.sendStatus(400);
    }
    const cat = await getCategoryById(catId);
    if (!cat) {
        return res.sendStatus(404);
    }
    res.json(cat);
});

router.post('/', async (req, res) => {
    const data = req.body as Category;
    if (!data.category) return res.sendStatus(400);
    try {
        const newCategory = await createCategory(data);
        return res.json(newCategory);
    } catch (e) {
        return res.status(400).send(e);
    }
});

// router.get('/api/word', (req, res) => {
//     const dataC = getWord('cry');
//     res.json(dataC);
// });

router.delete('/api/category', (req, res) => {
    const findCategory = req.body.category;
    if (!findCategory) return res.sendStatus(400);
    const deletedCategory = deleteCategoryByCategoryName(findCategory);
    res.json(deletedCategory);
});

router.post('/', async (req, res) => {
    const data = req.body;
    if (!data.category) return res.sendStatus(400);
    try {
        const newCategory = await createNewCategory(data);
        return res.json(newCategory);
    } catch (e) {
        return res.status(400).send(e);
    }
});

export default router;
