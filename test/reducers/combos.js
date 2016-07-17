import { assert } from 'chai';
import combosReducer from '../../src/reducers/combos';
import * as Types from '../../src/actions/combos/constants';
import sinon from 'sinon';
import combos from '../mocks/combos';

describe('Combos Reducer', () => {

  it('should return the initial state', () => {

    assert.deepEqual(combosReducer(undefined, {}), {
      isFetching: false,
      items: []
    });
  });

  it('should set the isFetching flag when get request is initiated', () => {
    assert.deepEqual(combosReducer(undefined, {
        type: Types.COMBOS_GET_REQUEST
      }), {
        isFetching: true,
        items: []
      }
    );
  });

  describe('Add a combo', () => {
    it('should add a combo to the combo list', () => {
      assert.deepEqual(combosReducer({
        isFetching: false,
        items: combos
      }, {
        type: Types.RECEIVE_COMBO_SUCCESS,
        lastReceived: Date.now(),
        combo: { scratches: ['chirb', 'orbit'] }
      }), {
        isFetching: false,
        items: [
          ...combos,
          {
            scratches: ['chirb', 'orbit']
          }
        ]
      });
    });
  });

  describe('Commands Get Success', () => {
    let clock;
    before(() => {
      clock = sinon.useFakeTimers();
    });
    after(() => {
      clock.restore();
    });
    it('should map the commands on success', () => {
      assert.deepEqual(combosReducer({
        isFetching: false,
        items: [
          {
            id: '4bbbbd3f-12a9-hj71-0965-a8f941555014',
            scratches: ['test'],
            isDone: false,
          },
          {
            id: 'BY8f1d3f-bc9-4091-9965-a8f946464613',
            scratches: ['test1'],
            isDone: false
          }
        ]
      }, {
        type: Types.COMBOS_GET_SUCCESS,
        combos: combos,
        lastReceived: Date.now()
      }), {
          lastUpdated: Date.now(),
          isFetching: false,
          items: [
            {
              id: '4bbbbd3f-12a9-hj71-0965-a8f941555014',
              scratches: ['test'],
              isDone: false
            },
            {
              id: 'BY8f1d3f-bc9-4091-9965-a8f946464613',
              scratches: ['test1'],
              isDone: false
            },
            ...combos
          ]
        }
      );
    });
  });
});
