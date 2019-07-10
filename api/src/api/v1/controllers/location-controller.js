import { location } from '../services';

export const record = async (req, res) => {
  req.statusCode = 200;
  req.message = 'Successfully recorded ISS location';
  req.operation = await location.record();

  res.exec();
};
