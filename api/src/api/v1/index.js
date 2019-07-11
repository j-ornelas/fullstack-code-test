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

  // record endpoint exists to force a fetch of the current ISS location.
  // this is purely for demo purposes to avoid waiting for cron job.
  router.get('/record', location.record);
  router.get('/location', location.get);
  return router;
};
