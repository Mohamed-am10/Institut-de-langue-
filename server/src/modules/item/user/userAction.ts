import type { RequestHandler } from "express";
import userRepository from "./user.Repository";

const add: RequestHandler = async (req, res) => {
  try {
    const user = await userRepository.create(req.body);

    if (user) {
      res.status(201).json("Your account has been created !");
    } else {
      res.status(404).json("An error");
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

export default { add };
