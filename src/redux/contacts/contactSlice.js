import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactState = { items: [] };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            name: contact.name,
            number: contact.number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});
const config = {
  key: 'contacts',
  storage,
};
export const contactsReducer = persistReducer(config, contactSlice.reducer);
export const { addContact, deleteContact } = contactSlice.actions;
