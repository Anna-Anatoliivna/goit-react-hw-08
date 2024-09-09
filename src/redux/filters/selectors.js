import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/slice";
import { selectNameFilter } from "./slice";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterValue) =>
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase());
    }),
);
