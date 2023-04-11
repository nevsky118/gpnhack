import useGeolocation from '../../hooks/use-geolocation';
import { useGetLocationQuery } from '../../redux/services/suggestions';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import s from './Geolocation.module.scss';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';

const Geolocation = () => {
	const { latitude, longitude, error } = useGeolocation();

	const { data, isLoading } = useGetLocationQuery(
		{ lat: latitude, lon: longitude },
		{ skip: !latitude || !longitude }
	);

	return (
		<div className={s.root}>
			<Text size="2xl">Ваша геолокация</Text>

			{!isLoading && data && longitude && latitude && (
				<>
					<Card className={s.card} verticalSpace="l" horizontalSpace="l">
						<Text size="xl">Широта {latitude}</Text>
						<Text size="xl">Долгота: {longitude}</Text>
						{error && (
							<Text size="xl" view="alert">
								{error}
							</Text>
						)}
						<Text size="xl">{data.suggestions[0].value}</Text>
					</Card>
					<YMaps>
						<Map
							className={s.map}
							defaultState={{ center: [latitude, longitude], zoom: 9 }}
						>
							<Placemark defaultGeometry={[latitude, longitude]} />
						</Map>
					</YMaps>
				</>
			)}
		</div>
	);
};

export default Geolocation;
