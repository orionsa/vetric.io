import { IJson } from '../../types/general.types.js';
import { FB_GRAPHQL_EP } from '../utils/constants.js';
import { getValidJson, getBodyString } from '../utils/helpers.js';
import gotInstance from '../utils/gotInstance.js';


export const isValidUser = (rawData: IJson | IJson[]): boolean => {
  /** Check if there is an object with populated data.user */
  
  return Array.isArray(rawData) ? rawData.some(obj => !!obj.data.user) : !!rawData.data.user;
}

export const getHeaderData = async (id:string): Promise<IJson | IJson[]> => {
  try {
    const response = await gotInstance.post(FB_GRAPHQL_EP, {
      headers: {
        "x-fb-friendly-name": "ProfileCometHeaderQuery",
      },
      body: getBodyString(id),
    });  

    return getValidJson(response.body);
  } catch (error) {
    throw error;
  }
}