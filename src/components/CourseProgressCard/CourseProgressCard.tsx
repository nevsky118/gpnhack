import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { useThemeVars } from '@consta/uikit/useThemeVars';
import { ButtonProps } from '@consta/uikit/__internal__/src/components/EventInterceptor/propsHandlers/useButtonEventHandler';
import { IconCheck } from '@consta/uikit/IconCheck';
import { Badge } from '@consta/uikit/Badge';
import { Pie } from '@consta/charts/Pie';
import s from './CourseProgressCard.module.scss';

interface CourseProgressCardProps {
	title: string;
	for: string;
	topic: string;
	desc: string;
	buttonProps?: ButtonProps;
	total?: number;
	tasksCompleted?: number;
	completed?: boolean;
}

const PieChart = ({ valueA, valueB }: { valueA: number; valueB: number }) => {
	const vars = useThemeVars();

	const data = [
		{ type: 'A', value: valueA },
		{ type: 'B', value: valueB },
	];

	return (
		<Pie
			style={{ width: 24, height: 24 }}
			data={data}
			angleField="value"
			colorField="type"
			innerRadius={0.8}
			legend={false}
			tooltip={false}
			label={false}
			color={[
				vars.color.primary['--color-bg-success'],
				vars.color.primary['--color-bg-ghost'],
			]}
			statistic={undefined}
		/>
	);
};

const CourseProgressCard = ({
	completed = false,
	...props
}: CourseProgressCardProps) => {
	const vars = useThemeVars();

	return (
		<Card verticalSpace="2xl" horizontalSpace="2xl" className={s.root}>
			<div className={s.wrapper}>
				<div className={s.header}>
					<Text size="2xl">{props.title}</Text>
					<div className={s.about}>
						<Text size="s" view="secondary">
							{props.for}
						</Text>
						<Text size="s" view="secondary">
							•
						</Text>
						<Text size="s" view="secondary">
							{props.topic}
						</Text>
					</div>
					<Text size="m">{props.desc}</Text>
				</div>
				<div className={s.footer}>
					<Button {...props.buttonProps} className={s.btn} />
					{completed ? (
						<Badge
							className={s.badge}
							label={
								(<IconCheck style={{ width: '16px', height: '16px' }} />) as any
							}
							status="success"
							form="round"
						/>
					) : props?.tasksCompleted ? (
						<div className={s.summary}>
							<div className={s.total}>
								<Text>
									{props.tasksCompleted}/{props.total}
								</Text>
								<Text view="secondary"> заданий</Text>
							</div>
							{props.total && (
								<PieChart
									valueA={props.tasksCompleted}
									valueB={props.total - props.tasksCompleted}
								/>
							)}
						</div>
					) : (
						<div className={s.total}>
							<Text>{props.total}</Text>
							<Text view="secondary"> заданий</Text>
						</div>
					)}
				</div>
			</div>
		</Card>
	);
};
export default CourseProgressCard;
