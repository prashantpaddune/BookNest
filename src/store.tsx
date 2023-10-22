// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './reducers/cart';
import ordersReducer from './reducers/orders';

const reducers = combineReducers({
    cart: cartReducer,
    orders: ordersReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'orders'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
});

const persistor = persistStore(store);

export { store, persistor };
