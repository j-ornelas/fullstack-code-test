import Router from 'express';
import {
  user,
  location,
} from './controllers';
import {
  error,
  format,
  exec,
} from './middleware';

export default () => {
  const router = Router();

  router.use(error);
  router.use(format);
  router.use(exec);

  router.post('/signup', user.signUp);
  router.post('/login', user.logIn);

  // TODO: this endpoint can be used in our cron job,
  // but we may choose not to expose it later on.
  router.get('/record', location.record);

  return router;
};
