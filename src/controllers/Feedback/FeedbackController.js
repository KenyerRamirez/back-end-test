import Feedback from "../../models/Feedback/Feedback.js";

export const createFeedback = async (req, res) => {
    const { evaluacionId, comentarios } = req.body;
    if (!evaluacionId || !comentarios) {
      return res.status(400).json({
        status: 400,
        message: "Todos los campos son requeridos.",
      });
    }
  
    try {
      const data = await Feedback.create({
        evaluacionId,
        comentarios
      });
      res.status(200).json({
        status: 200,
        message: "Feedback creado con éxito",
        data: data,
      });
      console.log(`Feedback ${data._id} created successfully!`);
    } catch (error) {
      console.log("Was an error trying to create Feedback", error);
    }
  };