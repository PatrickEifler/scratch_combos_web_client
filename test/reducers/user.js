import { assert } from 'chai';
import userReducer from '../../src/reducers/user';
import * as Types from '../../src/actions/user/constants';
import sinon from 'sinon';
import userMock from '../mocks/user';

describe('User Reducer', () => {
  it('should return the initial state', () => {
    assert.deepEqual(userReducer(undefined, {}), {});
  });
  it('should clear the user object on logged out', () => {
    assert.deepEqual(userReducer({}, {
        type: Types.USER_LOGGED_OUT
      }),
    {}
    );
  });

  describe('Receives the permission', () => {
    let clock;
    before(() => {
      clock = sinon.useFakeTimers();
    });
    after(() => {
      clock.restore();
    });
    it('should set the isAuthorized flag on the user', () => {
      assert.propertyVal(userReducer({}, {
          type: Types.USER_LOGGED_IN,
          user: userMock
        }),
        'isAuthorized',
        true
      );
    });
    it('should set the user obj after receiving the permission', () => {
      assert.deepEqual(userReducer({}, {
          type: Types.USER_LOGGED_IN,
          user: userMock
        }), {
          token: 'T0DdhmTNvcHrqYcMQsVBkXMJ3gmYluwU',
          isAuthorized: true
        }
      );
    });
  });
});
