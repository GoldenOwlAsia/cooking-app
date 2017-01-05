import type { Action } from './types';
export const SELECT_ITEM = 'SELECT_ITEM';

export function selectItem(index : number, title :string) : Action {

  return {
    type: SELECT_ITEM,
    payload: {
      index: index,
      title: title
    }
  };
}
