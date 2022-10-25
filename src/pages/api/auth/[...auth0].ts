import {
  handleAuth,
  handleCallback,
  handleLogin,
  handleLogout,
  handleProfile,
} from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req, res) {
    const returnTo = req.query["returnTo"];

    await handleLogin(req, res, {
      returnTo: typeof returnTo === "string" ? returnTo : "/",
    });
  },
  async logout(req, res) {
    const returnTo = req.query["returnTo"];

    await handleLogout(req, res, {
      returnTo: typeof returnTo === "string" ? returnTo : "/",
    });
  },
  async callback(req, res, options) {
    await handleCallback(req, res, options);
  },
  async profile(req, res, options) {
    await handleProfile(req, res, options);
  },
});
