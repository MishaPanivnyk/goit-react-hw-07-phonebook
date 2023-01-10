export const getFilterList = state => {
  const normalizedFilter = state.filters.toLowerCase();
  return state.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
