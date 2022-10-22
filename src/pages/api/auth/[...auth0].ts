import {
  handleAuth,
  handleCallback,
  handleLogin,
  handleLogout,
  handleProfile,
} from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: "/",
    });
  },
  async logout(req, res) {
    await handleLogout(req, res, {
      returnTo: "/",
    });
  },
  async callback(req, res, options) {
    await handleCallback(req, res, options);
  },
  async profile(req, res, options) {
    await handleProfile(req, res, options);
  },
});
