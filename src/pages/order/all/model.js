import { addRule, queryRule, removeRule, updateRule } from './service';
import { query, add, update, del } from '@/services/rest';
import { queryOrders } from '@/services/api';

const Model = {
  namespace: 'order',
  state: {
    data: {
      list: [],
      pagination: {},
      link: {},
    }
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryOrders, {...payload, limit:1});
      console.log('response', response)
      yield put({
        type: 'save',
        payload: {
          list: response.data.orders,
          pagination: {},
          link: response.headers['link']
        },
      });
    },

    *add({ payload, callback }, { call, put }) {
      const response = yield call(add, 'orders', payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },

    *remove({ payload, callback }, { call, put }) {
      const response = yield call(remove, 'orders', payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },

    *update({ payload, callback }, { call, put }) {
      const response = yield call(update, 'orders', payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, data: action.payload };
    },
  },
};
export default Model;
