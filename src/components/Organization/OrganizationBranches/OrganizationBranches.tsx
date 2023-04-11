import s from './OrganizationBranches.module.scss';
import { Text } from '@consta/uikit/Text';
import { Grid, GridItem } from '@consta/uikit/Grid';
import {
	OrganizationType,
	SuggestionResponse,
} from '../../../redux/services/suggestions';

interface OrganizationBranchesProps {
	organizations: SuggestionResponse<OrganizationType>['suggestions'];
	onBranchSelect: (name: string) => void;
}
const OrganizationBranches = ({
	organizations,
	onBranchSelect,
}: OrganizationBranchesProps) => {
	return (
		<div className={s.root}>
			<Text size="xl">Филиалы</Text>

			<Grid gap="s" cols={4}>
				{organizations.slice(1).map(org => (
					<GridItem
						key={org.value}
						className={s.item}
						onClick={() => onBranchSelect(org.data.kpp)}
					>
						<Text size="s">{org.data.name.full}</Text>
					</GridItem>
				))}
			</Grid>
		</div>
	);
};

export default OrganizationBranches;
