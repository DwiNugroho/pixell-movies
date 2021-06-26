const defaultState = () => ({
  //
});

export type stateType = ReturnType<typeof defaultState>;

export default (state: stateType = defaultState()) => {
  return state;
};
