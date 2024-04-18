export const API_URL = 'https://api.escuelajs.co/api/v1/';

export function TOKEN_POST(body) {
  return {
    url: API_URL + 'auth/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + 'users/',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PRODUCT_GET(offset, limit) {
  return {
    url: API_URL + `products?offset=${offset}&limit=${limit}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
