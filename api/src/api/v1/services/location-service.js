import fetch from 'node-fetch';
import { Location } from '../models';

// not using process.env for demo simplicity
const ISS_LINK = 'http://api.open-notify.org/iss-now.json';

export const record = async () => {
  const {
    iss_position: { longitude, latitude },
  } = await fetch(ISS_LINK).then(res => res.json());

  const locationParams = {
    dateCreated: Date.now(),
    position: {
      latitude,
      longitude,
    },
  };

  return Location.create(locationParams);
};
