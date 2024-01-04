import { createSelector } from '@reduxjs/toolkit';

export const selectedContacts = state => state.contacts.items;
export const selectedIsLoading = state => state.contacts.isLoading;
export const selectedError = state => state.contacts.error;
export const selectedFilter = state => state.filter.filter;

export const selectedFilteredContacts = createSelector(
  [selectedContacts, selectedFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      const hasName = contact.name.toLowerCase().includes(filter.toLowerCase());
      return hasName;
    });
  }
);
