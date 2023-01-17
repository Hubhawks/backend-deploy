const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const passport = require("passport");
const CLIENT_URL = "https://hubhawks1.netlify.app/";
router.get("/login/success", (req, res) => {
	if (req.user) {
	  res.status(200).json({
		success: true,
		message: "successfull",
		user: req.user,
		//   cookies: req.cookies
	  });
	}
});
router.get("/logout", (req, res) => {
	req.logout();
	res.redirect(CLIENT_URL);
  });
  
  router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
  
  router.get(
	"/google/callback",
	passport.authenticate("google", {
	  successRedirect: CLIENT_URL,
	  failureRedirect: "/login/failed",
	})
  );
router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
		console.log(res);
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;
