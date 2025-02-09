import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-10  text-xl font-bold">
      {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
        <div key={label} className="flex flex-col items-center">
            <span className="text-sm text-red-400">{label}</span>
          <span className="text-3xl">
            {Object.values(timeLeft)[i].toString().padStart(2, "0")}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const targetDate = new Date("2025-02-18T00:00:00");
  return (
    <div className="flex">
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}
