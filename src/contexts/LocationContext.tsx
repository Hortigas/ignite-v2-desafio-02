import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface LocationProviderProps {
    children: ReactNode;
}

interface locationData {
    ip: string;
    hostname: string;
    city: string;
    region: string;
    country: string;
    loc: string;
    org: string;
    postal: string;
    timezone: string;
    readme: string;
}

type LocationContextType = {
    location: locationData | undefined;
};

const LocationContext = createContext<LocationContextType>({} as LocationContextType);

export function LocationProvider({ children }: LocationProviderProps) {
    const [location, setLocation] = useState<locationData>();

    useEffect(() => {
        async function getLocationBasedOnIp() {
            const storedStateAsJSON = localStorage.getItem('@CoffeeDelivery:Location-1.0.1');
            if (!!storedStateAsJSON) {
                setLocation(JSON.parse(storedStateAsJSON));
            } else {
                const response = await fetch('https://ipinfo.io/json');
                if (response.status === 200) {
                    const newLocation = await response.json();
                    setLocation(newLocation);
                    localStorage.setItem('@CoffeeDelivery:Location-1.0.1', JSON.stringify(newLocation));
                } else {
                    const error = await response.json();
                    console.log(error);
                }
            }
        }
        getLocationBasedOnIp();
    }, []);

    return <LocationContext.Provider value={{
        location
    }}>{children}</LocationContext.Provider>;
}

export function useLocation(): LocationContextType {
    return useContext(LocationContext);
}
