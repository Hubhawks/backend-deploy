const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "73790928133-suk88f55p624r77bnohl5iv3l6g3tjtm.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";



passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
