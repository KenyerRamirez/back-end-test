import jwt from "jsonwebtoken";
import Usuario from "../../models/Users/Users.js";
import bcrypt from "bcrypt";
import { config } from "dotenv";
config();

const ROLES_PERMITIDOS = ['Admin', 'Manager', 'Employee'];


export const createUsers = async (req, res) => {
  const { nombre, contrasena, puestoTrabajo, rol } = req.body;
  if (!ROLES_PERMITIDOS.includes(rol)) {
    return res.status(400).json({
      status: 400,
      error: "Rol inválido",
      message: `El rol debe ser uno de los siguientes: ${ROLES_PERMITIDOS.join(', ')}`,
    });
  }
  try {
    const passwordHashed = await bcrypt.hash(contrasena, 8);
    const dataUser = await Usuario.create({
      nombre,
      contrasena: passwordHashed,
      puestoTrabajo,
      rol,
    });
    res.status(200).json({
      status: 200,
      message: "User created successfully",
      data: dataUser,
    });
    console.log(`User ${dataUser._id} created successfully!`);
  } catch (error) {
    console.log("Was an error trying to create users", error);
  }
};

export const loginUsers = async (req, res) => {
  const { nombre, contrasena } = req.body;
  try {
    const dataUser = await Usuario.findOne({ nombre }).exec();
    if (dataUser) {
      const passwordHashed = await bcrypt.compare(
        contrasena,
        dataUser.contrasena
      );
      if (passwordHashed) {
        const token = generateAccesToken(nombre, dataUser._id);
        res.header("authorization", token).json({
          status: 200,
          token: token,
          userData: dataUser,
        });
        console.log(`Bienvenido ${nombre}!`);
      } else {
        res.status(401).json({
          status: 401,
          error: "Sin acceso",
          message: "Contraseña incorrecta",
        });
        console.log("Incorrect password.");
      }
    } else {
      res.status(404).json({
        status: 404,
        error: "Sin acceso",
        message: "Usuario no encontrado",
      });
      console.log("User not found");
    }
  } catch (error) {
    console.log("Was an error trying to log in", error);
  }
};

const generateAccesToken = (nombre, userId) => {
  const payload = {
    sub: userId,
    nombre: nombre,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });
  return token;
};

export const verifyAccessToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      error: "Sin acceso",
      message: "Acceso denegado, token inexistente o expirado.",
    });
    console.log("Access denied, token doesn't exist or is invalid");
  } else {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        res.status(401).json({
          error: "Sin acceso",
          message: "Acceso denegado, token incorrecto o expirado",
        });
        console.log("Access denied, token expired or incorrect");
      } else {
        console.log("Correct token");
        next();
      }
    });
  }
};
