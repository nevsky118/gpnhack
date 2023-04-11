import userAvatar from '../../assets/user.png';
import { Header as HeaderComponent } from '@consta/header/Header';
import { Text } from '@consta/uikit/Text';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setPage, setTheme, Theme } from '../../redux/slices/appSlice';
import s from './Header.module.scss';
import { IconSun } from '@consta/uikit/IconSun';
import {
	presetGpnDark,
	presetGpnDefault,
	presetGpnDisplay,
	ThemePreset,
} from '@consta/uikit/Theme';
import { IconMoon } from '@consta/uikit/IconMoon';
import { IconLightningBolt } from '@consta/uikit/IconLightningBolt';
import { IconComponent } from '@consta/uikit/Icon';

const notifications = [
	{
		label: 'Уведомления',
		status: ['system', 'warning'],
	},
];

export type ThemeItem = {
	icon: IconComponent;
	key: string;
	label: string;
	preset: ThemePreset;
};

export const themes: ThemeItem[] = [
	{
		key: 'default',
		label: 'Светлая',
		icon: IconSun,
		preset: presetGpnDefault,
	},
	{
		key: 'dark',
		label: 'Темная',
		icon: IconMoon,
		preset: presetGpnDark,
	},
	{
		key: 'display',
		preset: presetGpnDisplay,
		label: 'Системная',
		icon: IconLightningBolt,
	},
];

const Header = () => {
	const { theme, page } = useAppSelector(state => state.app);
	const dispatch = useAppDispatch();

	const menu = [
		{
			label: 'Моё обучение',
			active: '/' === page,
			onClick: () => dispatch(setPage('/')),
		},
		{
			label: 'Задачи',
			active: '/tasks' === page,
			onClick: () => dispatch(setPage('/tasks')),
		},
		{
			label: 'Геолокация',
			active: '/geo' === page,
			onClick: () => dispatch(setPage('/geo')),
		},
		{
			label: 'Поиск организации',
			active: '/search' === page,
			onClick: () => dispatch(setPage('/search')),
		},
	];

	return (
		<HeaderComponent
			className={s.root}
			logo={
				<Text size="l" weight="bold" lineHeight="s">
					Портал Разработчика
				</Text>
			}
			userName="Михаил Романов"
			userAvatar={userAvatar}
			notifications={notifications}
			userLogined={true}
			themeItems={themes}
			theme={themes.find(t => t.key === theme)}
			onThemeChange={({ value }: { value: ThemeItem }) =>
				value && dispatch(setTheme(value.key as Theme))
			}
			menu={menu}
		/>
	);
};

export default Header;
