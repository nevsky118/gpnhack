import Header from './components/Header';
import { useAppSelector } from './redux/store';
import { Theme } from '@consta/uikit/Theme';
import Suggestions from './components/Suggestions';
import Course from './components/Course';
import Catalogue from './components/Catalogue';
import { themes } from './redux/slices/appSlice';
import Search from './components/Search';
import Geolocation from './components/Geolocation';

function App() {
	const { theme, page } = useAppSelector(state => state.app);

	const pages = {
		'/': (
			<>
				<Suggestions />
				<Course />
				<Catalogue />
			</>
		),
		'/tasks': null,
		'/geo': <Geolocation />,
		'/search': <Search />,
	};

	return (
		<Theme className="App" preset={themes[theme]}>
			<Header />
			<main>
				{/*@ts-ignore*/}
				{pages[page]}
			</main>
		</Theme>
	);
}

export default App;
