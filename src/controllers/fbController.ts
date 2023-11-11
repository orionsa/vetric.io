import { Request, Response } from 'express';

import * as userService from 'services/fbService.js';
import { isValidFbid } from 'utils/helpers.js';

export const getHeaderData = async (req: Request, res: Response) => {
  try {
    if (!isValidFbid(req.params.id)) {
      return res.status(400).send({ message: 'invalid fbid' });
    }
    const data = await userService.getHeaderData(req.params.id);
    const isValidUser = userService.isValidUser(data);
    
    if (!isValidUser) {
      return res.status(404).send({ message: 'User doesn\'t exist or is not public'});
    }
    
    res.send(data);
  } catch (error) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
}