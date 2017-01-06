import type { Action }  from '../actions/types';
import { SELECT_FOOD }  from '../actions/list';
import { SEND_INFO }    from '../actions/list';
import { SEND_NAME }    from '../actions/list';

export type State = {
    list: string
}

const initialState = {
  list: [
    [
      {id: 1, title: 'Salad gà với xoài xanh', views: 12,
       imageUrl: 'https://ameovat.com/wp-content/uploads/2016/09/cach-lam-salad.jpg'},
      {id: 2, title: 'Mỳ Ý sốt kem', views: 23,
       imageUrl: 'https://ameovat.com/wp-content/uploads/2016/09/cach-lam-my-y.jpg'}
    ],
    [
      {id: 3, title: 'Gà muối hấp chanh sả', views: 34,
      imageUrl: 'https://ameovat.com/wp-content/uploads/2016/10/ga-hap-muoi-8.jpg'},
      {id: 4, title: 'Lẩu thập cẩm', views: 45,
      imageUrl: 'https://ameovat.com/wp-content/uploads/2016/08/cach-nau-lau-thap-cam-3.jpg'}
    ],
    [
      {id: 5, title: 'Bắp chiên', views: 56,
       imageUrl: 'https://ameovat.com/wp-content/uploads/2016/05/ngochien1.jpg'},
      {id: 6, title: 'Cơm chiên dương châu', views: 67,
       imageUrl: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg'}
    ],
    [
      {id: 7, title: 'Kem khoai môn', views: 78,
       imageUrl: 'https://ameovat.com/wp-content/uploads/2016/04/k3.jpg'},
      {id: 8, title: 'Heo quay', views: 89,
       imageUrl: 'https://ameovat.com/wp-content/uploads/2016/08/cach-lam-heo-quay1-600x470.jpg'}
    ]
  ],
  selectedItemId: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SELECT_FOOD) {
    return {
      ...state,
      urlReceive: action.dict.url,
      foodNameReceive: action.dict.foodName,
    };
  }

  if (action.type === SEND_INFO) {
    return {
      ...state,
      foodNameReceive: action.dict.foodName,
      infoReceive: action.dict.info,
    };
  }
  if (action.type === SEND_NAME) {
    return {
      ...state,
      foodNameReceive: action.dict.foodName,
    };
  }
  return state;
}
