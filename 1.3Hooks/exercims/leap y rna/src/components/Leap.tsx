import React, { useState } from "react";

const Leapyear = () => {
  const [year, actuYear] = useState<string>("");
  const [isleap, actuLeap] = useState<boolean | null>();

  const InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    actuYear(value);
    actuLeap(checkLeap(Number(value)));
  };
  const checkLeap = (year: number): boolean => {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
      <input type="number" value={year} onChange={InputChange} />
      {isleap !== null && (
        <p>
          {year} {isleap ? "is" : "is not"} a leap year
        </p>
      )}
    </div>
  );
};
export default Leapyear;
