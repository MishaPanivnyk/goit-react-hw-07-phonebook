import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../operations';

const extraActions = [fetchContacts, addContact, deleteContact];
const getActionsWithType = type => extraActions.map(action => action[type]);

const contactsInitialState = {
  contactsList: [],
  isLoading: false,
  error: null,
};
// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: contactState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.items.push(action.payload);
//       },
//       prepare(contact) {
//         return {
//           payload: {
//             name: contact.name,
//             number: contact.number,
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.items.findIndex(
//         contact => contact.id === action.payload
//       );
//       state.items.splice(index, 1);
//     },
//   },
// });
// const config = {
//   key: 'contacts',
//   storage,
// };
const addContactsReducer = (state, action) => {
  state.contactsList.push(action.payload);
};

const fetchContactsReducer = (state, action) => {
  state.contactsList = action.payload;
};

const deleteContactsReducer = (state, action) => {
  const index = state.contactsList.findIndex(
    contact => contact.id === action.payload.id
  );
  state.contactsList.spice(index, 1);
};

const anySuccesReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const anyPendingReducer = state => {
  state.isLoading = true;
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducer: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsReducer)
      .addCase(addContact.fulfilled, addContactsReducer)
      .addContact(deleteContact.fulfilled, deleteContactsReducer)
      .addMatcher(isAnyOf(...getActionsWithType('fulfilled')), anySuccesReducer)
      .addMatcher(isAnyOf(...getActionsWithType('pending')), anyPendingReducer)
      .addMatcher(
        isAnyOf(...getActionsWithType('rejected')),
        anyRejectedReducer
      ),
});
export const contactsReducer = contactsSlice.reducer;
