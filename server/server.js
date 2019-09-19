import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt  from 'jsonwebtoken';
import expressJwt   from 'express-jwt';

import LoginMap from '../server/login.map'


const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

const loginMap = new LoginMap();
router.route('/login').post(loginMap.login);


app.use('/', router);
app.listen(3000, () => console.log('Server listening on port 3000'))