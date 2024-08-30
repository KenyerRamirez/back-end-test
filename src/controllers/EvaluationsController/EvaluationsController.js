import Evaluacion from "../../models/Evaluations/Evaluations.js";

export const createEvaluation = async (req, res) => {
  const { tipoEvaluación, usuarioEvaluado, evaluador, preguntas } = req.body;
  if (!tipoEvaluación || !usuarioEvaluado || !evaluador || !preguntas) {
    return res.status(400).json({
      status: 400,
      message: "Todos los campos son requeridos.",
    });
  }

  try {
    const totalPuntaje = preguntas.reduce((acc, pregunta) => {
      return acc + pregunta.puntaje;
    }, 0);

    const puntajePromedio = Math.round(totalPuntaje / preguntas.length);

    const scorePerCategory = preguntas.reduce((acc, pregunta) => {
      const { categoria, puntaje } = pregunta;

      if (!acc[categoria]) {
        acc[categoria] = { totalPuntaje: 0, count: 0 };
      }

      acc[categoria].totalPuntaje += puntaje;
      acc[categoria].count += 1;

      return acc;
    }, {});

    const puntajePorCategoria = Object.keys(scorePerCategory).map(
      (categoria) => {
        const { totalPuntaje, count } = scorePerCategory[categoria];
        const puntajePromedioCategoria = Math.round(totalPuntaje / count);

        return {
          categoria,
          puntajeTotal: puntajePromedioCategoria,
        };
      }
    );

    const data = await Evaluacion.create({
      tipoEvaluación,
      usuarioEvaluado,
      evaluador,
      preguntas,
      puntajeTotal: puntajePromedio,
      puntajePorCategoria,
    });
    res.status(200).json({
      status: 200,
      message: "Evaluacion creada con éxito",
      data: data,
    });
    console.log(`Evaluation ${data._id} created successfully!`);
  } catch (error) {
    console.log("Was an error trying to create product", error);
  }
};

export const getEvaluations = async (req, res) => {
  try {
    const data = await Evaluacion.find();
    res.status(200).json({
      status: 200,
      message: "Evaluaciones obtenidas.",
      data: data,
    });
    console.log("Evaluations retrieved successfully");
  } catch (error) {
    console.log("Was an error trying to get Evaluations", error);
  }
};

export const getEvaluation = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Evaluacion.findOne({ _id: id }).exec();
    res.status(200).json({
      status: 200,
      message: "Evaluacion obtenida.",
      data: data,
    });
    console.log("Evaluation retrieved successfully");
  } catch (error) {
    console.log("Was an error trying to get Evaluation", error);
  }
};

export const updateEvaluation = async (req, res) => {
  const { id } = req.params;
  const { preguntas } = req.body;
  try {
    const totalPuntaje = preguntas.reduce((acc, pregunta) => {
      return acc + pregunta.puntaje;
    }, 0);

    const puntajePromedio = Math.round(totalPuntaje / preguntas.length);

    const scorePerCategory = preguntas.reduce((acc, pregunta) => {
      const { categoria, puntaje } = pregunta;

      if (!acc[categoria]) {
        acc[categoria] = { totalPuntaje: 0, count: 0 };
      }

      acc[categoria].totalPuntaje += puntaje;
      acc[categoria].count += 1;

      return acc;
    }, {});

    const puntajePorCategoria = Object.keys(scorePerCategory).map(
      (categoria) => {
        const { totalPuntaje, count } = scorePerCategory[categoria];
        const puntajePromedioCategoria = Math.round(totalPuntaje / count);

        return {
          categoria,
          puntajeTotal: puntajePromedioCategoria,
        };
      }
    );
    const data = await Evaluacion.findOneAndUpdate(
      { _id: id },
      { preguntas, puntajeTotal: puntajePromedio, puntajePorCategoria }
    ).exec();
    res.status(200).json({
      status: 200,
      message: "Evaluacion actualizada.",
      data: data,
    });
    console.log("Evaluation updated successfully");
  } catch (error) {
    console.log("Was an error trying to update Evaluation", error);
  }
};

export const getEmployeeEvaluations = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Evaluacion.find({ usuarioEvaluado: id }).exec();
    res.status(200).json({
      status: 200,
      message: "Evaluaciones del empleado obtenida.",
      data: data,
    });
    console.log("Employee's evaluations retrieved successfully");
  } catch (error) {
    console.log("Was an error trying to get Employee's evaluations", error);
  }
};
