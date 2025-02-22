const useSpeedCalculate = (time: number, all: number) => {
  const speed = ((all / 5 / time) * 60).toFixed(0);
  return { speed };
};

export default useSpeedCalculate;
