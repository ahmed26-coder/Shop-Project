import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2025-02-18T00:00:00").getTime(); // حدد التاريخ المستهدف
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center gap-6 bg-black py-10 flex-wrap">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <div key={index} className="flex flex-col items-center bg-white text-black rounded-full w-20 h-20 md:w-24 md:h-24 justify-center">
          <span className="text-xl md:text-2xl font-bold">{String(value).padStart(2, "0")}</span>
          <span className="text-xs md:text-sm">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
