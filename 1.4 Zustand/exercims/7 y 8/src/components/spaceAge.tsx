import React,{useState} from "react";

interface Planet {
    name: string;
    orbitalPeriod: number;
}

const Planets: Planet[] = [
    { name: "Mercury", orbitalPeriod: 0.2408467 },
    { name: "Venus", orbitalPeriod: 0.61519726 },
    { name: "Earth", orbitalPeriod: 1.0 },
    { name: "Mars", orbitalPeriod: 1.8808158 },
    { name: "Jupiter", orbitalPeriod: 11.862615 },
    { name: "Saturn", orbitalPeriod: 29.447498 },
    { name: "Uranus", orbitalPeriod: 84.016846 },
    { name: "Neptune", orbitalPeriod: 164.79132 }
]

const AgeCalculator = () => {
    const [ageSeconds, setAgeSeconds] = useState<number>(0);

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgeSeconds(Number(e.target.value));
    };

    const calculateAges = () => {
        const earthYearSeconds: number = 31557600;
        const earthYears: number = ageSeconds / earthYearSeconds;

        const ageOnplanets: {[key: string]: number} = {};
        Planets.forEach((planet: Planet)=>{
            ageOnplanets[planet.name] = earthYears / planet.orbitalPeriod;
        });
        return ageOnplanets;
    };

    const renderAges = () => {
        const ageOnPlanets = calculateAges();
        return (
            <div>
                {Object.keys(ageOnPlanets).map((planetName: string) => (
                    <p key={planetName}>
                        {planetName}: {ageOnPlanets[planetName].toFixed(2)} Earth-years old
                    </p>
                ))}
            </div>
        );
        
    };
    return (
        <div>
            <label htmlFor="ageInput">Enter age in seconds:</label>
            <input
                type="number"
                id="ageInput"
                value={ageSeconds}
                onChange={change}
            />
            {ageSeconds > 0 && renderAges()}
        </div>
    );

}
export default AgeCalculator