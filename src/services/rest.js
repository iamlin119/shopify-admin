import request from '@/utils/request';

/**
 * Resource的查询接口
 */
export async function query(resource, params) {
  return request(`/api/${resource}?${stringify(params)}`);
}

/**
 * Resource的添加接口
 */
export async function add(resource, params) {
  return request(`/api/${resource}`, {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

/**
 * Resource的更新接口
 */
export async function update(resource, id, params) {
  return request(`/api/${resource}/${id}`, {
    method: 'PUT',
    body: {
      ...params,
    },
  });
}

/**
 * Resource的添加接口
 * @remark 如何支持批量删除?
 */
export async function del(resource, id) {
  return request(`/api/${resource}/${id}`, {
    method: 'DELETE',
  });
}

