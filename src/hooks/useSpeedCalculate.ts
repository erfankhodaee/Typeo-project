const useSpeedCalculate = (time: number, correct: number) => {
  const speed = ((correct / 5 / time) * 60).toFixed(0);
  return { speed };
};

export default useSpeedCalculate;
