import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { IconBackward } from '@consta/uikit/IconBackward';
import { IconForward } from '@consta/uikit/IconForward';
import CourseProgressCard from '../CourseProgressCard';
import { IconRestart } from '@consta/uikit/IconRestart';
import s from './Course.module.scss';
const Course = () => {
	return (
		<Card
			shadow={false}
			verticalSpace="2xl"
			horizontalSpace="2xl"
			className={s.root}
		>
			<div className={s.header}>
				<div className={s.title}>
					<Text size="2xl">Путь Front End Developer</Text>
					<Button label="Скрыть пройденные" view="ghost" />
				</div>
				<div className={s.icons}>
					<Button view="ghost" onlyIcon iconLeft={IconBackward} form="round" />
					<Button view="ghost" onlyIcon iconLeft={IconForward} form="round" />
				</div>
			</div>
			<div className={s.cards}>
				<CourseProgressCard
					completed
					buttonProps={{
						label: 'Пройти заново',
						view: 'secondary',
						iconLeft: IconRestart,
					}}
					title="Добро пожаловать!"
					for="Для новичка"
					topic="Основы работы"
					desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
				/>
				<CourseProgressCard
					buttonProps={{ label: 'Продолжить тему' }}
					total={10}
					tasksCompleted={8}
					title="Начало работы"
					for="Для новичка"
					topic="Основы работы"
					desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
				/>
				<CourseProgressCard
					buttonProps={{ label: 'Начать' }}
					total={10}
					title="Введение в рабочую среду"
					for="Для новичка"
					topic="Основы работы"
					desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
				/>
			</div>
		</Card>
	);
};

export default Course;
