import { assert } from 'chai';
import * as combosActions from '../../src/actions/combos';
import * as Types from '../../src/actions/combos/constants';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import combosMock from '../mocks/combos';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Combos Actions', () => {
  describe('receiveCombos()', () => {
    it('should create an action to receive combos list', () => {
      assert.deepEqual(combosActions.receiveCombos(combosMock), {
        type: Types.COMBOS_GET_SUCCESS,
        lastReceived: Date.now(),
        combos: combosMock
      });
    });
    it('should should create an action to request commands list', () => {
    	assert.deepEqual(combosActions.requestCombos(), {
    		type: Types.COMBOS_GET_REQUEST
    	});
    });
	});

	describe('addCombos()', () => {
		let fetchStub;
		let store;
		before(() => {
			fetchStub = sinon.stub(global, 'fetch');
			let combosPromise = () => {
			  return new Promise((res, rej) => {
			    res(combosMock[0]);
			  });
			};
			fetchStub.returns(combosPromise());
			store = mockStore({ isFetching: false, items: [], user: { token: 'y4iqyiu' } });
		});
		after(() => {
			fetchStub.restore();
		});
		it('should create an action to create combo', () => {
			return store.dispatch(combosActions.addCombo()).then(() => {
				assert.propertyVal(store.getActions()[0], 'type', 'RECEIVE_COMBO_SUCCESS');
			});
		});
  });

  describe('getCombo', () => {
  	it('should create an action to get one command', () => {
  		//TODO
    });
  });

});
