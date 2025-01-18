import React, { useEffect, useState } from 'react';

function Timer2() {
  const [secVal, setSecVal] = useState(0);
  const [minVal, setMinVal] = useState(0);
  const [hourVal, setHourVal] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const timer = setTimeout(() => {
        setSecVal((prev) => {
          if (prev + 1 >= 60) {
            setMinVal((m) => (m + 1 >= 60 ? 0 : m + 1));
            if (minVal + 1 >= 60) {
              setHourVal((h) => h + 1);
            }
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isRunning, secVal, minVal]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setSecVal(0);
    setMinVal(0);
    setHourVal(0);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-purple-300 to-blue-200 text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-purple-800">Clock Timer</h1>
      </div>

      <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <span className="text-6xl md:text-8xl font-bold text-purple-600">{hourVal.toString().padStart(2, '0')}</span>
          <span className="text-sm md:text-lg text-gray-600">Hrs</span>
        </div>
        <span className="text-6xl md:text-8xl font-bold text-purple-600 -mt-6 md:-mt-8 lg:-mt-10 ">:</span>
        <div className="flex flex-col items-center">
          <span className="text-6xl md:text-8xl font-bold text-purple-600">{minVal.toString().padStart(2, '0')}</span>
          <span className="text-sm md:text-lg text-gray-600">Min</span>
        </div>
        <span className="text-6xl md:text-8xl font-bold text-purple-600 -mt-6 md:-mt-8 lg:-mt-10">:</span>
        <div className="flex flex-col items-center">
          <span className="text-6xl md:text-8xl font-bold text-purple-600">{secVal.toString().padStart(2, '0')}</span>
          <span className="text-sm md:text-lg text-gray-600">Sec</span>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={startTimer}
          className="px-6 py-2 bg-green-500 text-white font-bold rounded-lg shadow hover:bg-green-600 transition"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="px-6 py-2 bg-red-500 text-white font-bold rounded-lg shadow hover:bg-red-600 transition"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer2;
