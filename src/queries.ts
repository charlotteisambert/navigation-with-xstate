let hasToPassStep2 = true;

export const getHasToPassStep2 = (): Promise<boolean> =>
  new Promise((resolve) => {
    setTimeout(() => {
      return resolve(false);
    }, 500);
  });

export const postPassedStep2 = () => {
  hasToPassStep2 = false;
  return new Promise((resolve) => {
    resolve(false);
  });
};
