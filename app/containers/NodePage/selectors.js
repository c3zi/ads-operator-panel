import formatMoney from 'lib/formatMoney';
import formatDate from 'lib/formatDate';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the nodePage state domain
 */

const selectNodePageDomain = state => state.get('nodePage', initialState);

/**
 * Other specific selectors
 */
const makeSelectNode = () =>
  createSelector(selectNodePageDomain, globalState => {
    const node = globalState.get('node').toJS();
    if (node.data.balance) {
      node.data.balance = formatMoney(node.data.balance);
    }
    if (node.data.mtim) {
      node.data.mtim = formatDate(node.data.mtim);
    }

    return node;
  });

const makeSelectAccounts = () =>
  createSelector(selectNodePageDomain, globalState => {
    const accounts = globalState.get('accounts').toJS();
    accounts.data.map(item => {
      const account = item;
      account.balance = formatMoney(account.balance);

      return account;
    });

    return accounts;
  });

export { makeSelectNode, makeSelectAccounts };
