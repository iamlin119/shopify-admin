import { query, add } from './rest'

const apiBase = `https://mirror.viralbox.org/webtrain/admin/api/2019-10`

export const queryOrders = (params) => query('orders.json', params, apiBase)
export const addOrder = (params) => add('orders.json', params, apiBase)
export const updateOrder = (id, params) => update('orders.json', id, params, apiBase)
export const delOrder = (id, params) => del('orders.json', id, params, apiBase)
