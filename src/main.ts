import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { EnhancedStore, PayloadAction, ReducersMapObject } from '@reduxjs/toolkit';
import './style.css';

export const SLICES_COUNT = 500;
export const ACTIONS_PER_SLICE_COUNT = 25;

type SliceState = Record<string, number>;
type SliceAction = PayloadAction<number>;
type SliceReducer = Record<string, (state: SliceState, action: SliceAction) => void>;

const setupStore = () => {
  const slices = [];
  let createSliceDurationSum = 0;

  for (let s = 0; s < SLICES_COUNT; s++) {
    const initialState: SliceState = {};
    const reducers: SliceReducer = {};

    // Each slice state should have value_* properties and a matching amount
    // of changed_* actions that modify corresponding value in the state.
    for (let a = 0; a < ACTIONS_PER_SLICE_COUNT; a++) {
      initialState[`value_${a}`] = 0;
      reducers[`changed_${a}`] = (state: SliceState, action: SliceAction) => {
        state[`value_${a}`] = action.payload;
      };
    }

    // Creating slice (RTK API)
    const start = performance.now();
    const slice = createSlice({
      name: `slice_${s}`,
      initialState,
      reducers
    });
    const end = performance.now();
    createSliceDurationSum += end - start;

    slices.push(slice);
  }

  console.log(
    performance.measure('create-slices', {
      start: 0,
      duration: createSliceDurationSum
    })
  );

  // Collecting slice reducers config
  const reducer = slices.reduce((acc, { name, reducer }) => {
    acc[name] = reducer;
    return acc;
  }, {} as ReducersMapObject);

  // Configuring store (RTK API)
  performance.mark('configure-store-start');
  const store = configureStore({
    reducer
  });
  performance.mark('configure-store-end');
  console.log(
    performance.measure('configure-store', {
      start: 'configure-store-start',
      end: 'configure-store-end',
      detail: {
        slices: SLICES_COUNT,
        actionsPerSlice: ACTIONS_PER_SLICE_COUNT,
        actionsTotal: SLICES_COUNT * ACTIONS_PER_SLICE_COUNT,
        statePropertiesTotal: SLICES_COUNT + SLICES_COUNT * ACTIONS_PER_SLICE_COUNT
      }
    })
  );

  // Listening for changes in store (Redux API)
  store.subscribe(() => {
    performance.mark('action-end');
    console.log(performance.measure('action', 'action-start', 'action-end'));
  });

  return store;
};

let store: EnhancedStore | undefined;

// Buttons handling
const setupStoreButton = document.getElementById('setupStore') as HTMLButtonElement;
const randomChangeButton = document.getElementById('randomChange') as HTMLButtonElement;

setupStoreButton.textContent += ` (slices: ${SLICES_COUNT}, actions per slice: ${ACTIONS_PER_SLICE_COUNT})`;

setupStoreButton.addEventListener('click', () => {
  store = setupStore();
  setupStoreButton.disabled = true;
  randomChangeButton.disabled = false;
});

randomChangeButton.addEventListener('click', () => {
  if (store) {
    const sliceName = `slice_${Math.floor(Math.random() * SLICES_COUNT)}`;
    const actionName = `changed_${Math.floor(Math.random() * ACTIONS_PER_SLICE_COUNT)}`;
    const action = {
      type: `${sliceName}/${actionName}`,
      payload: Math.random()
    };

    // Dispatching action (Redux API)
    performance.mark('action-start');
    store.dispatch(action);
  }
});
