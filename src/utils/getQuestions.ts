import {IQuestion, questions} from "../data/questions.ts";

export const getQuestions = (
  amount = 3,
  max_complexity = 10,
  min_complexity = 1
): IQuestion[] => {
  const filtered = questions.filter(q =>
    q.complexity >= min_complexity && q.complexity <= max_complexity
  );

  const shuffled = filtered.sort(() => Math.random() - 0.5);

  return shuffled.slice(0, amount);
};