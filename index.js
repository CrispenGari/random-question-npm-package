import { questions } from "./questions.js";
// maximum number of random questions should be 50

const randomQuestion = (number_of_questions = 0) => {
  try {
    if (number_of_questions > 100) {
      throw new Error(
        "The maximum number of questions that you can generate is 100."
      );
    } else {
      if (number_of_questions > 0) {
        let questions_result = [];
        for (let i = 0; i < number_of_questions; i++) {
          const random_index =
            Math.floor(Math.random() * 10000) % questions.length;
          questions_result.push(questions[random_index]);
        }
        return questions_result;
      } else {
        const random_index =
          Math.floor(Math.random() * 10000) % questions.length;
        return questions[random_index];
      }
    }
  } catch (error) {
    return error;
  }
};

module.exports = {
  randomQuestion,
};
