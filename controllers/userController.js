const bcrypts = require("bcryptjs");
const db = require("C:/Users/zeta/Desktop/API_Port/models");
const jwt = require("jsonwebtoken");

exports.add = async (req, res) => {
  try {
    const usuario = await db.User.create({
      username: req.body.username,
      email: req.body.email,
      cellphone: req.body.cellphone,
      password: req.body.password,
      rol: "U",
    });

    res.status(200).send({
      message: "Usuario creado con éxito.",
    });
  } catch (error) {
    res.status(500).send({
      error: "¡Error en el servidor! \n" + error,
    });
  }
};

exports.list = async (req, res) => {
  try {
    const users = await db.User.findAll();

    if(users){
      res.status(200).json(users);
    }else{
      res.status(404).send({
        error: 'No hay registros en el sistema.'
    });
    }
  } catch (error) {
    res.status(500).send({
      error: "¡Error en el servidor! \n" + error,
    });
  }
};

exports.listOne = async (req, res) => {

  try{

    const userEmail = req.params.email;

    const Usuario = await db.User.findOne({ where: { email: userEmail } });

    if(Usuario){
      res.status(200).json(Usuario);
    }else{
      res.status(404).send({
        error: 'No hay registros en el sistema.'
    });
    }
  }catch(error){
    res.status(500).send({
      error: "Error en el servidor! \n "+ error,
    });
  }

};