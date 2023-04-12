import { useEffect, useState } from "react";

function Timer() {
  const [secondsLeft, setSecondsLeft] = useState(15 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prevSecondsLeft) => prevSecondsLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutesLeft = Math.floor(secondsLeft / 60);
  const secondsRemainder = secondsLeft % 60;
  
  const dashArrayLength = 377;
  const dashPatternLength = (secondsLeft / (15 * 60)) * dashArrayLength;
  const dashOffset = dashArrayLength - dashPatternLength;

  return (
    <div className="relative w-[300px] h-[300px]">
      <div className="absolute inset-0">
        <svg height={`250px`} width={`250px`} viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="58" stroke="#e6e6e6" strokeWidth="4" fill="none" />
          <circle
            cx="60"
            cy="60"
            r="58"
            stroke="green"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${dashPatternLength} ${dashArrayLength}`}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 60 60)"
          />
        </svg>
      </div>
      <div className="absolute inset-0 flex justify-center items-center font-bold text-2xl text-gray-700" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        {minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}:{secondsRemainder < 10 ? `0${secondsRemainder}` : secondsRemainder}
      </div>
    </div>
  );
}

export default Timer;
