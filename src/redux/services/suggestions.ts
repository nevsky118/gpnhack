import { api } from './api';

interface LocationRequest {
	lat: number | undefined;
	lon: number | undefined;
}
export interface SuggestionResponse<T> {
	suggestions: {
		value: string;
		data: T;
	}[];
}

export type OrganizationType = {
	address: {
		value: string;
	};
	state: {
		status:
			| 'ACTIVE'
			| 'LIQUIDATING'
			| 'LIQUIDATED'
			| 'BANKRUPT'
			| 'REORGANIZING';
		registration_date: number | null;
		liquidation_date: number | null;
	};
	inn: string;
	kpp: string;
	ogrn: string;
	management: {
		name: string;
		post: string;
	};
	name: {
		full_with_opf: string;
		full: string;
	};
	branch_type: 'MAIN' | 'BRANCH';
};

interface ListResponse<T> {
	items: T[];
	total: number;
	page: number;
	size: number;
	pages: number;
}

interface PaginationQuery {
	preprocessed: boolean;
	page: number;
	size: number;
}

export const suggestionsApi = api.injectEndpoints({
	endpoints: build => ({
		getLocation: build.query<SuggestionResponse<any>, LocationRequest>({
			query: body => ({
				url: `geolocate/address`,
				method: 'POST',
				body,
			}),
		}),
		getOrganization: build.query<
			SuggestionResponse<OrganizationType>,
			string | undefined | null
		>({
			query: query => ({
				url: `suggest/party`,
				method: 'POST',
				body: { query },
			}),
		}),
		getOrganizationById: build.query<
			SuggestionResponse<OrganizationType>,
			string | undefined
		>({
			query: query => ({
				url: `findById/party`,
				method: 'POST',
				body: { query },
			}),
		}),
	}),
});

export const {
	useGetLocationQuery,
	useGetOrganizationQuery,
	useGetOrganizationByIdQuery,
} = suggestionsApi;
