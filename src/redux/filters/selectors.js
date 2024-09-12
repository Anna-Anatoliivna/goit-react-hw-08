import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";


export const selectNameFilter = state => state.filters.filterValue;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterValue) =>
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase());
    }),
);

