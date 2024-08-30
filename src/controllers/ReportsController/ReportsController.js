import Evaluacion from "../../models/Evaluations/Evaluations.js";

export const getEmployeeEvaluation = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Evaluacion.findOne({ _id: id }).exec();
    
    res.status(200).json({
      status: 200,
      message: "Evaluacion del empleado obtenida.",
      data: data,
    });
    console.log("Employee's evaluation retrieved successfully");
  } catch (error) {
    console.log("Was an error trying to get Employee's evaluation", error);
  }
};
