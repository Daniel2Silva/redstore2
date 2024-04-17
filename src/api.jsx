export const API_URL = 'https://api.escuelajs.co/api/v1/';

export function TOKEN_POST(body) {
  return {
    url: 'https://api.escuelajs.co/api/v1/auth/login',
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
    url: 'https://api.escuelajs.co/api/v1/users/',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
