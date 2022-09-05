import { useEffect, useState } from 'react';

const Timer = ({ handleFinish }: { handleFinish: () => void }) => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      handleFinish();
    }
  }, [seconds, handleFinish]);

  return (
    <div>
      <b>{seconds}</b>
    </div>
  );
};

export default Timer;
