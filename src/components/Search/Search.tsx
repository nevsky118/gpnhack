import s from './Search.module.scss';
import { useState } from 'react';
import { Combobox } from '@consta/uikit/Combobox';
import { Text } from '@consta/uikit/Text';
import {
	useGetOrganizationByIdQuery,
	useGetOrganizationQuery,
} from '../../redux/services/suggestions';
import debounce from 'lodash.debounce';
import { SkeletonBrick } from '@consta/uikit/Skeleton';
import OrganizationCard from '../Organization/OrganizationCard';

type Item = {
	label: string;
	id: string;
};

const Search = () => {
	const [value, setValue] = useState<Item | null>();
	const [query, setQuery] = useState<string | undefined | null>();
	const { data: items, isLoading } = useGetOrganizationQuery(query, {
		skip: !query,
	});
	const { data: organization, isLoading: isSuggestionsLoading } =
		useGetOrganizationByIdQuery(value?.id, { skip: !value });

	const debouncedSearch = debounce(setQuery, 500, {
		leading: false,
		trailing: true,
	});

	console.log('value', value);
	console.log('organization.suggestions', organization?.suggestions);

	return (
		<div className={s.root}>
			<Text size="2xl">Поиск организации по названию, адресу и ИНН</Text>
			<div className={s.search}>
				<Combobox
					items={
						(items &&
							items.suggestions.length > 0 &&
							items.suggestions.map(item => ({
								id: item.data.inn,
								label: item.value,
							}))) ||
						[]
					}
					value={value}
					onInputChange={({ value }) => debouncedSearch(value)}
					onChange={({ value }) => setValue(value)}
					placeholder="Найти по названию организации"
					isLoading={isLoading}
				/>
			</div>

			{value ? (
				isSuggestionsLoading && !organization ? (
					<SkeletonBrick height={248} />
				) : (
					organization && (
						<OrganizationCard organizations={organization.suggestions} />
					)
				)
			) : null}
		</div>
	);
};

export default Search;
