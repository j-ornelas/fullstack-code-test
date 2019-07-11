import cron from 'node-cron';
import { location } from '../api/v1/services';

export default () => {
  cron.schedule('*/2 * * * *', location.record);
};
