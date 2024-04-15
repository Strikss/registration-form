const MockApi = (): Promise<''> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve('');
    }, 2000),
  );

export default MockApi;
