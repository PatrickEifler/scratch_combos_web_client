import { assert } from 'chai';
import * as UserActions from '../../src/actions/user';
import * as Types from '../../src/actions/user/constants';
import configureMockStore from 'redux-mock-store';
import userMock from '../mocks/user';
import thunk from 'redux-thunk';
import sinon from 'sinon';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User Actions', () => {
  describe('receivePermission()', () => {
    it('should create an action for receiving the permissions', () => {
      const userMock = {
        ajax: {},
        isAuthorized: true,
        mqtt: {},
        persistToken: true
      };

      assert.deepEqual(UserActions.receivePermission(userMock), {
        type: Types.USER_LOGGED_IN,
        lastReceived: Date.now(),
        user: userMock
      });
    });
  });
  describe.skip('login()', () => {
    let store;
    let authStub;
    before(() => {
      authStub; //STUB AUTH SERVICE
      let authPromise = () => {
        return new Promise((res, rej) => {
          res(userMock);
        });
      };

      authStub.returns(authPromise());
      store = mockStore({ user: {} });
    });
    after(() => {
      authStub.restore();
    });

    it('should create an action which logs the user in', () => {
      return store.dispatch(UserActions.login()).then(() => {
        assert.propertyVal(store.getActions()[0], 'type', 'USER_LOGGED_IN');
        assert.deepEqual(store.getActions()[0].user, userMock);
      });
    });

  });
});
