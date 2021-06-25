const debounce = (fn: () => void, ms = 300) => {
  // eslint-disable-next-line
  var timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export default debounce;
