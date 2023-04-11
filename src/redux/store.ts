import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import { api } from './services/api';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const createStore = (
	options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
	configureStore({
		reducer: {
			[api.reducerPath]: api.reducer,
			app: appReducer,
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(api.middleware),
		...options,
	});

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
