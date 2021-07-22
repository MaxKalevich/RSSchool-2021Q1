import {Router} from 'express';
import {
    getCategoriesState,
    deleteCategoryByCategoryName,
    createNewCategory
} from './repository';

const controller = require('./../authController');
const router = Router();
const {check} = require('express-validator');
const authMiddleware = require('../middlreware/authMiddleware');
const roleMiddleware = require('../middlreware/roleMiddleware');

router.post('/registration', [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть больше трех и не более десяти символов').isLength({min: 4, max: 10})
], controller.registration);

router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers);

router.post('/login', controller.login);

router.get('/', async (req, res) => {
    const categories = await getCategoriesState();
    res.json(categories);
});

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
