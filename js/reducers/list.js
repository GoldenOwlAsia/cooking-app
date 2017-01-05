import type { Action } from '../actions/types';
import { SELECT_ITEM } from '../actions/list';

export type State = {
    list: string
}

const initialState = {
  list: [
    [
      {id: 1, title: 'Sườn xào chua ngọt', views: 12,
       imageUrl: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg'},
      {id: 2, title: 'Mực xào sả ớt', views: 23,
       imageUrl: 'https://1.bp.blogspot.com/-U7nphYWlJ4k/V060w7kYJEI/AAAAAAAAAXg/RxKmisXDPdI0Ymy0_mOIo2CGRbi4A-M-QCLcB/s320/canh%2Bchua.jpg'}
    ],
    [
      {id: 3, title: 'Cơm chiên dương châu', views: 34,
      imageUrl: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg'},
      {id: 4, title: 'Canh chua cá hú', views: 45,
      imageUrl: 'https://1.bp.blogspot.com/-U7nphYWlJ4k/V060w7kYJEI/AAAAAAAAAXg/RxKmisXDPdI0Ymy0_mOIo2CGRbi4A-M-QCLcB/s320/canh%2Bchua.jpg'}
    ],
    [
      {id: 5, title: 'Cá kho tộ', views: 56,
       imageUrl: 'https://1.bp.blogspot.com/-U7nphYWlJ4k/V060w7kYJEI/AAAAAAAAAXg/RxKmisXDPdI0Ymy0_mOIo2CGRbi4A-M-QCLcB/s320/canh%2Bchua.jpg'},
      {id: 6, title: 'Sườn xào chua ngọt', views: 67,
       imageUrl: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg'}
    ]
  ],
  selectedItemId: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SELECT_ITEM) {
    return {
      ...state,
      index: action.payload.index,
      title: action.payload.title,
    };
  }
  return state;
}
