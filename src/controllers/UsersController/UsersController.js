import Usuario from "../../models/Users/Users.js";

export const getEmployees = async (req, res) => {
  try {
    // const permissions = await userWithPermission(id);
    // if (permissions) {
    const usersData = await Usuario.find({ rol: "Employee" }).exec();
    res.status(200).json({
      status: 200,
      message: "employees retrieved",
      data: usersData,
    });
    console.log("employees retrieved successfully");
    // } else {
    //   res.status(401).json({
    //     status: 401,
    //     message: "You don't have permissions to manage users",
    //   });
    // }
  } catch (error) {
    console.log("Was an error trying to get employees", error);
  }
};
