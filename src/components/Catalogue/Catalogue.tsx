import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { Text } from '@consta/uikit/Text';
import { useState } from 'react';
import { Grid, GridItem } from '@consta/uikit/Grid';
import CourseProgressCard from '../CourseProgressCard';
import s from './Catalogue.module.scss';

const items: string[] = [
	'Все',
	'Рабочая среда',
	'Библиотеки',
	'Пройденные',
	'Не пройденные',
];
const Catalogue = () => {
	const [value, setValue] = useState<string | null>(items[0]);
	const desc =
		'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете';

	return (
		<div className={s.root}>
			<Text size="2xl">Каталог тем</Text>
			<ChoiceGroup
				value={value}
				onChange={({ value }) => setValue(value)}
				items={items}
				getItemLabel={item => item}
				multiple={false}
				view="ghost"
				name="Courses"
				className={s.choice}
			/>

			<Grid cols="3" gap="2xl">
				<GridItem>
					<CourseProgressCard
						title="Начало работы"
						for="Для новичка"
						topic="Основы работы"
						desc={desc}
						buttonProps={{ label: 'Продолжить' }}
						tasksCompleted={8}
						total={10}
					/>
				</GridItem>
				<GridItem>
					<CourseProgressCard
						title="Работа с библиотеками GPN"
						for="Профессионалу"
						topic="Библиотеки"
						desc={desc}
						buttonProps={{ label: 'Начать' }}
						total={255}
					/>
				</GridItem>
				<GridItem>
					<CourseProgressCard
						title="Введение в рабочую среду"
						for="Профессионалу"
						topic="Библиотеки"
						desc={desc}
						buttonProps={{ label: 'Начать' }}
						total={10}
					/>
				</GridItem>
				<GridItem>
					<CourseProgressCard
						title="Начало работы"
						for="Для новичка"
						topic="Основы работы"
						desc={desc}
						buttonProps={{ label: 'Продолжить тему' }}
						tasksCompleted={3}
						total={10}
					/>
				</GridItem>
				<GridItem>
					<CourseProgressCard
						title="Работа с библиотеками GPN"
						for="Профессионалу"
						topic="Библиотеки"
						desc={desc}
						buttonProps={{ label: 'Начать' }}
						total={255}
					/>
				</GridItem>
				<GridItem>
					<CourseProgressCard
						title="Введение в рабочую среду"
						for="Профессионалу"
						topic="Библиотеки"
						desc={desc}
						buttonProps={{ label: 'Начать' }}
						total={10}
					/>
				</GridItem>
			</Grid>
		</div>
	);
};

export default Catalogue;
