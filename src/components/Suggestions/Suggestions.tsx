import { Text } from '@consta/uikit/Text';
import { Card } from '@consta/uikit/Card';
import { Pie } from '@consta/charts/Pie';
import { useThemeVars } from '@consta/uikit/useThemeVars';
import { Button } from '@consta/uikit/Button';
import { IconDown } from '@consta/uikit/IconDown';
import s from './Suggestions.module.scss';

const data = [
	{ type: '8', value: 8 },
	{ type: '2', value: 2 },
];
const Suggestions = () => {
	const vars = useThemeVars();
	return (
		<div>
			<Text size="2xl">Рекомендуемые темы</Text>
			<Card verticalSpace="2xl" className={s.root}>
				<Pie
					className={s.pie}
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
					statistic={{
						title: {
							customHtml: (v, v2, v3, v4) => (
								<Text size="2xl" weight="regular">
									8/10
								</Text>
							),
						},
						content: {
							customHtml: (v, v2, v3, v4) => (
								<Text size="s" view="ghost" weight="regular">
									заданий
								</Text>
							),
						},
					}}
				/>

				<div className={s.wrapper}>
					<div className={s.header}>
						<Text size="3xl">Начало работы</Text>
						<div className={s.about}>
							<Text size="s" view="secondary">
								Для новичка
							</Text>
							<Text size="s" view="secondary">
								•
							</Text>
							<Text size="s" view="secondary">
								Основы работы
							</Text>
						</div>
						<Text size="m">
							Познакомьтесь ближе с компанией и узнайте больше о том, что вы
							делаете
						</Text>
					</div>
					<Button label="Продолжить тему" className={s.btn} />
				</div>
			</Card>

			<div className={s.footer}>
				<div className={s.divider} />
				<Button view="ghost" label="Показать ещё" iconRight={IconDown} />
				<div className={s.divider} />
			</div>
		</div>
	);
};

export default Suggestions;
