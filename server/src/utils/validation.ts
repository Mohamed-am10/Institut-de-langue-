import type { RequestHandler } from "express";

const userValidation: RequestHandler = (req, res, next) => {
  try {
    const { email, password } = req.body;

    const isEmailValid = email.match(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    );

    if (!email || !password) {
      res.status(403).json("Fiels shouldn't be empty");
    } else if (!isEmailValid) {
      res.status(403).json("Email: Invalid format");
    } else if (password.length < 8) {
      res
        .status(403)
        .json("Password's length should be contain at least 8 characters");
    } else {
      next();
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

export default { userValidation };
