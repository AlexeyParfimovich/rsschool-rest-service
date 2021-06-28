// /**
//  * Login router
//  * @module loginRouter
//  */
// import { Router } from 'express';
// import { compare } from 'bcryptjs';
// import { Secret, sign } from 'jsonwebtoken';
// import { StatusCodes } from 'http-status-codes';

// import { getByLoginUser } from './user.service';
// import { JWT_SECRET_KEY } from "../../common/config";
// import { asyncWrapper } from '../../utils/asyncWrapper';
// import { User } from './user.entity';
 
//  const router = Router();
 
//  /**
//   *  Authorize with user login and password
//   */
//   router.route('/').post(asyncWrapper(async (req, res) => {
    
//     const user = await getByLoginUser(req.body['login']);
    
//     compare(req.body['password'], user.password, function (_err, matches) {
//       if (matches) {
//         const token = sign({ login: user.login, password: user.password }, <Secret>JWT_SECRET_KEY, { expiresIn: 60 * 60 });
//         res.json({
//           user: User.toRes(user),
//           message: "Successfully authenticated.",
//           token: token,
//         });
//       } else {
//         res.status(StatusCodes.FORBIDDEN).send(`Password doesn't match for login:${user.login} `);
//       }
//     })
//   }));

//  export default router;