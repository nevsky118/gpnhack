import { Text } from '@consta/uikit/Text';
import s from './OrganizationInfo.module.scss';
import {
	OrganizationType,
	SuggestionResponse,
} from '../../../redux/services/suggestions';
import { Badge } from '@consta/uikit/Badge';
import { Avatar } from '@consta/uikit/Avatar';
import { getDate } from '../../../lib/get-date';

const statuses = {
	ACTIVE: {
		label: 'Действующая',
		status: 'success',
	},
	LIQUIDATING: {
		label: 'Ликвидируется',
		status: 'warning',
	},
	LIQUIDATED: {
		label: 'Ликвидирована',
		status: 'error',
	},
	BANKRUPT: {
		label: 'Банкротство',
		status: 'error',
	},
	REORGANIZING: {
		label:
			'В процессе присоединения к другому юрлицу, с последующей ликвидацией',
		status: 'warning',
	},
};

const OrganizationInfo = ({
	org,
}: {
	org: SuggestionResponse<OrganizationType>['suggestions'][0] | undefined;
}) => {
	if (!org) {
		return <Text>Отсутствует информация об организации</Text>;
	}

	console.log('org', org);

	return (
		<>
			<div className={s.header}>
				<div className={s.title}>
					<Text size="2xl" weight="semibold">
						{org.data.name.full}
					</Text>
					{/*@ts-ignore*/}
					<Badge size="s" form="round" {...statuses[org.data.state.status]} />
				</div>
				{org.data.management && (
					<div className={s.management}>
						<Avatar name={org.data.management.name} />
						<div>
							<Text size="s" weight="semibold">
								{org.data.management.name}
							</Text>
							<Text size="xs" view="secondary">
								{org.data.management.post}
							</Text>
						</div>
					</div>
				)}
			</div>
			<div>
				<Text size="s" view="secondary">
					{org.data.address.value}
				</Text>
				<Text size="s" view="secondary">
					ИНН: {org.data.inn}
				</Text>
				{org.data.state.registration_date && (
					<Text size="s" view="secondary">
						Основана: {getDate(org.data.state.registration_date)}
					</Text>
				)}
				{org.data.state.liquidation_date && (
					<Text size="s" view="secondary">
						Ликвидирована: {getDate(org.data.state.liquidation_date)}
					</Text>
				)}
			</div>
		</>
	);
};

export default OrganizationInfo;
