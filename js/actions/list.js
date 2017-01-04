import type { Action } from './types';
export const SELECT_ITEM = 'SELECT_ITEM';

export function selectItem(index : number) : Action {
  console.log('22222', index)
  return {type: SELECT_ITEM, payload: index};
}
