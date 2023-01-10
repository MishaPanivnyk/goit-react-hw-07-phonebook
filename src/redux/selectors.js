import { createSelector } from '@reduxjs/toolkit';
import { getContacts } from './contacts/selectors';
import { getFilter } from './filter/selectors';

export const getFilterList = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
