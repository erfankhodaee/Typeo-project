

const useAccuracyCalculate = (correct: number, all: number) => {
  const accuracy = ((correct / all) * 100).toFixed(0);
  return { accuracy };
};

export default useAccuracyCalculate;
