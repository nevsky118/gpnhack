import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_SERVER_URL,
	mode: 'cors',
	prepareHeaders: (headers, { getState }) => {
		headers.set('Authorization', `Token ${import.meta.env.VITE_API_KEY}`);
		headers.set('X-Secret', `${import.meta.env.VITE_SECRET_KEY}`);
		return headers;
	},
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
	reducerPath: 'splitApi',
	baseQuery: baseQuery,
	tagTypes: ['Suggestions'],
	endpoints: () => ({}),
});
