import jwt  from 'jsonwebtoken';
import expressJwt   from 'express-jwt';

export default class LoginMap {

  login(req, res) {
    if (req.body) {
      console.log(req.body);
      if (req.body.email === 'admin@admin.com' && req.body.password === 'admin') {
        let token = jwt.sign({ userID: 'US001' }, 'jwt-token', { expiresIn: '2h' });
        res.send({status: true, data: token, message: 'User Successfully Logged In'});
      } else {
        res.send({status: false, message: 'Wrong username or password'});
      }
    }
  }
}