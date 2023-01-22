require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const email = require("./routes/email")
const passportSetup = require("./passport");
const bodyParser = require('body-parser');
const cookieSession = require("cookie-session");
const passport = require("passport");
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
app.use(
	cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
  
//   app.use(
// 	cors({
// 	  origin: "http://localhost:3000",
// 	  methods: "GET,POST,PUT,DELETE",
// 	  credentials: true,
// 	})
//   );
  const corsOptions ={
	origin:'*', 
	credentials:true,            //access-control-allow-credentials:true
	optionSuccessStatus:200,
 }
 app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
  app.use("/auth", authRoutes);
// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/email",email)
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
