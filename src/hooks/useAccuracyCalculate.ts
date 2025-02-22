const useAccuracyCalculate = (correct: number, all: number) => {
  const accuracy = ((correct / all) * 100).toFixed(0);
  const mistake = all - correct;
  return { accuracy, mistake };
};

export default useAccuracyCalculate;
