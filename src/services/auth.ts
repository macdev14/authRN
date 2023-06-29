interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'dklddjlhffhjdhjshjgsjha',
        user: {
          name: 'user',
          email: 'user@gmail.com',
        },
      });
    }, 2000);
  });
}
