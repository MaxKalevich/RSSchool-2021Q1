// @ts-ignore
const User = require('./models/User');
// @ts-ignore
const Role = require('./models/Role');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { secret } = require('./config');

const generateAccessToken = (id: any, roles: any) => {
        const payload = {
            id,
            roles
        }
        return jwt.sign(payload, secret, {
            expiresIn: '24h'
        });
}

class AuthController {
    async registration(req: any, res: any) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'Ошибка при регистрации'})
            }
            const { username, password } = req.body;
            // @ts-ignore
            const candidate = await User.findOne({username});
            if (candidate) {
                return res.status(400).json({message: 'Пользователь с таким именем уже существует'})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: 'USER'});
            // @ts-ignore
            const user = new User({username, password: hashPassword, roles: [userRole.value]});
            await user.save();
            return res.json({message: 'Пользователь успешно зарегистрирован'})
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Registration error'});
        }
    }

    async login(req: any, res: any) {
        try {
        const { username, password } = req.body;
        const user = await User.findOne({username});
        if (!user) {
            return res.status(400).json({message: `Пользователь ${username} не найден`});
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({message: 'Введен неверный пароль'});
        }
        const token = generateAccessToken(user._id, user.roles);
        return res.json({token});
        } catch(e) {
            console.log(e);
            res.status(400).json({message: 'Login error'});
        }
    }

    async getUsers(req: any, res: any) {
      //  const userRole = new Role();
      //  const adminRole = new Role({value: 'ADMIN'});
       // await userRole.save();
      //  await adminRole.save();
        const users = await User.find();
        res.json(users);
        try {
            res.json('Server work');
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new AuthController();
