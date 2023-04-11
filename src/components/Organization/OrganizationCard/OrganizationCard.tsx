import s from './OrganizationCard.module.scss';
import {
	OrganizationType,
	SuggestionResponse,
} from '../../../redux/services/suggestions';
import { Card } from '@consta/uikit/Card';
import { useState } from 'react';
import OrganizationBranches from '../OrganizationBranches';
import OrganizationInfo from '../OrganizationInfo';
import { Button } from '@consta/uikit/Button';
import { IconArrowLeft } from '@consta/uikit/IconArrowLeft';

interface OrganizationProps {
	organizations: SuggestionResponse<OrganizationType>['suggestions'];
}

const OrganizationCard = ({ organizations }: OrganizationProps) => {
	const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

	console.log('selectedBranch', selectedBranch);

	return (
		<Card
			verticalSpace="2xl"
			horizontalSpace="2xl"
			shadow={false}
			className={s.root}
		>
			{!selectedBranch ? (
				<OrganizationInfo org={organizations[0]} />
			) : (
				<>
					<OrganizationInfo
						org={organizations.find(org => org.data.kpp === selectedBranch)}
					/>
					<Button
						style={{ marginTop: 48, width: 'fit-content' }}
						label="Назад"
						iconLeft={IconArrowLeft}
						view="ghost"
						onClick={() => setSelectedBranch(null)}
					/>
				</>
			)}
			{!selectedBranch && organizations.length > 1 && (
				<OrganizationBranches
					organizations={organizations.slice(1)}
					onBranchSelect={setSelectedBranch}
				/>
			)}
		</Card>
	);
};

export default OrganizationCard;
