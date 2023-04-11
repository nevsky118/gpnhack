import { useEffect, useState } from 'react';

const useGeolocation = () => {
	const [latitude, setLatitude] = useState<number>();
	const [longitude, setLongitude] = useState<number>();
	const [error, setError] = useState<string>();

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			position => {
				setLatitude(position.coords.latitude);
				setLongitude(position.coords.longitude);
			},
			error => {
				setError(error.message);
			}
		);
	}, []);

	return { latitude, longitude, error };
};

export default useGeolocation;
