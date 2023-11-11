import { IJson } from '../../types/general.types.js';


export const getValidJson = (str: string): IJson | IJson => {
  /**
   * the response can be either an array of objects not separated by commas or a single object 
   * this mehthod will add commas to the array and parse it to JSON to make sure the response is a viable JSON
   * */ 
  const stringWithCommas = `[${str.replace(/\n(?!$)/g, ',\n')}]`;
  const arrayJson = JSON.parse(stringWithCommas);
  return arrayJson.length === 1 ? arrayJson[0] : arrayJson;
}

export const isValidFbid = (id:string): boolean => {
  /**
   * This is a simple regex to check if the id is a number to comply with the fbid format
   */
  const fbidRegex = /^\d+$/;
  return fbidRegex.test(id)
}

export const getBodyString = (id:string): string => {
  /**
   * This is the body string that is sent to the FB_GRAPHQL_EP endpoint,
   * @TODO find a way to fetch doc_id from api.
  */
  return `__a=1&__comet_req=15&fb_api_req_friendly_name=ProfileCometHeaderQuery&variables=%7B%22scale%22%3A1%2C%22selectedID%22%3A%22${id}%22%2C%22selectedSpaceType%22%3A%22community%22%2C%22selectedTab%22%3A%22${id}%22%2C%22shouldUseFXIMProfilePicEditor%22%3Afalse%2C%22userID%22%3A%22${id}%22%7D&doc_id=9929832307087807`
}