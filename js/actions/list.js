import type { Action } from './types';
export const SELECT_FOOD  = 'kSelectFood';
export const SEND_INFO    = 'kSendInfomation';

export function selectFood(url : string, foodName :string) : Action {
  return {
    type: SELECT_FOOD,
    dict: {
      url: url,
      foodName: foodName
    }
  };
}
export function sendInfo(foodName : string, info :string) : Action {

  return {
    type: SEND_INFO,
    dict: {
      foodName: foodName,
      info: info
    }
  };
}
