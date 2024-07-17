import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import SagaData from "./saga";


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['reducer'] 
};

const sagaMiddleware =  createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store =  configureStore({
    reducer: persistedReducer,
    middleware: ()=> [sagaMiddleware]
});


sagaMiddleware.run(SagaData)

export const persistor = persistStore(store);
export default store;