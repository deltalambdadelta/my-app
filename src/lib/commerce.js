import Commerce from '@chec/commerce.js';

export const commerce = new Commerce('pk_448344d33c55ad66b27a1a72285245fd026f4a1871d85', true, {
  axiosConfig: {
    headers: {
      'Chec-Version': '2021-07-21'
    },
  },
});