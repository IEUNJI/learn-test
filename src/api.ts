export const callCallback = onSuccess => {
  setTimeout(() => {
    onSuccess({ code: 0 });
  }, 500);
};

export const callPromise = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ code: 0 });
    }, 500);
  });
};
