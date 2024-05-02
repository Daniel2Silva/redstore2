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

export function TOKEN_REFRESH_POST(refresh_token) {
  return {
    url: 'https://api.escuelajs.co/api/v1/auth/refresh-token',
    options: {
      method: 'POST',
      headers: {
        refreshToken: refresh_token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: 'https://api.escuelajs.co/api/v1/users/',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(access_token) {
  return {
    url: 'https://api.escuelajs.co/api/v1/auth/profile',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + access_token,
      },
    },
  };
}

export function PRODUCT_GET(category) {
  return {
    url: `https://api.mercadolibre.com/sites/MLB/search?q=${category}&limit=12`,
    method: 'GET',
    headers: {
      Authorization: `Bearer APP_USR-12345678-031820-X-12345678`,
      'Content-Type': 'application/json',
    },
  };
}

export function PRODUCT_SEARCH(category, offset) {
  return {
    url: `https://api.mercadolibre.com/sites/MLB/search?q=${category}&limit=12&offset=${offset}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer APP_USR-12345678-031820-X-12345678`,
      'Content-Type': 'application/json',
    },
  };
}

export function GET_CATEGORY() {
  return {
    url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&limit=10',
    method: 'GET',
    headers: {
      Authorization: `Bearer APP_USR-12345678-031820-X-12345678`,
      'Content-Type': 'application/json',
    },
  };
}
