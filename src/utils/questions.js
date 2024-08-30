import Question from "../models/Questions/Questions.js";

const questionsJSON = [
    {
      "categoria": "Desempeño Laboral",
      "tipoEvaluacion": "Evaluación",
      "pregunta": "¿Cómo calificarías la calidad del trabajo realizado por el empleado?"
    },
    {
      "categoria": "Desempeño Laboral",
      "tipoEvaluacion": "Evaluación",
      "pregunta": "¿Cumple el empleado con los plazos establecidos?"
    },
    {
      "categoria": "Desempeño Laboral",
      "tipoEvaluacion": "Evaluación",
      "pregunta": "¿Cómo evaluas la capacidad del empleado para resolver problemas?"
    },
    {
      "categoria": "Habilidades de Comunicación",
      "tipoEvaluacion": "Evaluación",
      "pregunta": "¿Cómo calificarías la claridad y efectividad de la comunicación del empleado?"
    },
    {
      "categoria": "Habilidades de Comunicación",
      "tipoEvaluacion": "Evaluación",
      "pregunta": "¿El empleado escucha activamente a los demás?"
    },
    {
      "categoria": "Habilidades de Comunicación",
      "tipoEvaluacion": "Evaluación",
      "pregunta": "¿Cómo evalúas la habilidad del empleado para dar y recibir retroalimentación constructiva?"
    },
    {
      "categoria": "Gestión del Tiempo",
      "tipoEvaluacion": "Evaluación",
      "pregunta": "¿Cómo calificarías la capacidad del empleado para priorizar tareas?"
    },
    {
      "categoria": "Gestión del Tiempo",
      "tipoEvaluacion": "Evaluación",
      "pregunta": "¿El empleado es eficiente en la gestión de su tiempo?"
    },
    {
      "categoria": "Gestión del Tiempo",
      "tipoEvaluacion": "Evaluación",
      "pregunta": "¿Cómo evaluas la puntualidad del empleado en la entrega de proyectos?"
    },
    {
      "categoria": "Trabajo en Equipo",
      "tipoEvaluacion": "Evaluación",
      "pregunta": "¿Cómo calificarías la colaboración del empleado con sus compañeros de equipo?"
    },
    {
      "categoria": "Trabajo en Equipo",
      "tipoEvaluacion": "Evaluación",
      "pregunta": "¿El empleado contribuye positivamente a la dinámica de grupo?"
    },
    {
      "categoria": "Trabajo en Equipo",
      "tipoEvaluacion": "Evaluación",
      "pregunta": "¿Cómo evalúas la disposición del empleado para ayudar a otros miembros del equipo?"
    },
    {
      "categoria": "Innovación y Creatividad",
      "tipoEvaluacion": "Evaluación",
      "pregunta": "¿Cómo calificarías la capacidad del empleado para generar nuevas ideas?"
    },
    {
      "categoria": "Innovación y Creatividad",
      "tipoEvaluacion": "Evaluación",
      "pregunta": "¿El empleado busca formas creativas de resolver problemas?"
    },
    {
      "categoria": "Innovación y Creatividad",
      "tipoEvaluacion": "Evaluación",
      "pregunta": "¿Cómo evaluas la implementación de ideas innovadoras por parte del empleado?"
    },
    {
      "categoria": "Desempeño General",
      "tipoEvaluacion": "Autoevaluación",
      "pregunta": "¿Cómo calificarías tu rendimiento general en el último período de evaluación?"
    },
    {
      "categoria": "Desempeño General",
      "tipoEvaluacion": "Autoevaluación",
      "pregunta": "¿Qué logros consideras que has tenido durante este período?"
    },
    {
      "categoria": "Desempeño General",
      "tipoEvaluacion": "Autoevaluación",
      "pregunta": "¿Qué desafíos has enfrentado y cómo los has superado?"
    },
    {
      "categoria": "Habilidades y Competencias",
      "tipoEvaluacion": "Autoevaluación",
      "pregunta": "¿Cómo evaluas tu habilidad para cumplir con los objetivos y metas establecidas?"
    },
    {
      "categoria": "Habilidades y Competencias",
      "tipoEvaluacion": "Autoevaluación",
      "pregunta": "¿En qué áreas crees que necesitas mejorar para ser más efectivo en tu rol?"
    },
    {
      "categoria": "Habilidades y Competencias",
      "tipoEvaluacion": "Autoevaluación",
      "pregunta": "¿Qué habilidades nuevas has adquirido o desarrollado recientemente?"
    },
    {
      "categoria": "Gestión del Tiempo y Productividad",
      "tipoEvaluacion": "Autoevaluación",
      "pregunta": "¿Cómo calificarías tu capacidad para gestionar tu tiempo de manera efectiva?"
    },
    {
      "categoria": "Gestión del Tiempo y Productividad",
      "tipoEvaluacion": "Autoevaluación",
      "pregunta": "¿Qué estrategias utilizas para organizar y priorizar tus tareas?"
    },
    {
      "categoria": "Gestión del Tiempo y Productividad",
      "tipoEvaluacion": "Autoevaluación",
      "pregunta": "¿Cómo manejas las interrupciones y cambios en las prioridades?"
    },
    {
      "categoria": "Trabajo en Equipo y Comunicación",
      "tipoEvaluacion": "Autoevaluación",
      "pregunta": "¿Cómo evaluas tu colaboración con tus compañeros de equipo?"
    },
    {
      "categoria": "Trabajo en Equipo y Comunicación",
      "tipoEvaluacion": "Autoevaluación",
      "pregunta": "¿Qué tan efectiva consideras que es tu comunicación con el equipo y otros departamentos?"
    },
    {
      "categoria": "Trabajo en Equipo y Comunicación",
      "tipoEvaluacion": "Autoevaluación",
      "pregunta": "¿Qué acciones has tomado para mejorar tu comunicación y colaboración?"
    },
    {
      "categoria": "Innovación y Desarrollo Personal",
      "tipoEvaluacion": "Autoevaluación",
      "pregunta": "¿Cómo calificarías tu capacidad para proponer ideas nuevas y soluciones creativas?"
    },
    {
      "categoria": "Innovación y Desarrollo Personal",
      "tipoEvaluacion": "Autoevaluación",
      "pregunta": "¿Qué pasos has tomado para tu desarrollo profesional y personal?"
    },
    {
      "categoria": "Innovación y Desarrollo Personal",
      "tipoEvaluacion": "Autoevaluación",
      "pregunta": "¿Qué metas te has propuesto para tu crecimiento y cómo planeas alcanzarlas?"
    }
  ]
  

export async function addQuestionsToDatabase() {
  try {
    const data = await Question.find();
    if(data.length !== questionsJSON.length){
      await Question.insertMany(questionsJSON);
      console.log("Questions created successfully.");
    }
  } catch (error) {
    console.error("Was an error trying to create questions:", error);
  }
}
