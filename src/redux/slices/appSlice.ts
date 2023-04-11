import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
	presetGpnDefault,
	presetGpnDark,
	presetGpnDisplay,
} from '@consta/uikit/Theme';

export type Theme = 'default' | 'dark' | 'display';

type AppState = {
	theme: Theme;
	page: string;
};

export const themes = {
	default: presetGpnDefault,
	dark: presetGpnDark,
	display: presetGpnDisplay,
};

const initialState = {
	theme: 'default',
	page: '/',
} as AppState;

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.theme = action.payload;
		},
		setPage: (state, action: PayloadAction<string>) => {
			state.page = action.payload;
		},
	},
});

export const { setTheme, setPage } = appSlice.actions;
export default appSlice.reducer;
