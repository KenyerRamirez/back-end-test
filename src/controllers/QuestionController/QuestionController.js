import Question from "../../models/Questions/Questions.js";

export const getQuestions = async (req, res) => {
  try {
    const data = await Question.find()
      .select("_id categoria pregunta tipoEvaluacion")
      .exec();
    res.status(200).json({
      status: 200,
      message: "questions retrieved",
      data: data,
    });
    console.log("Questions retrieved successfully");
  } catch (error) {
    console.log("Was an error trying to get questions", error);
  }
};
