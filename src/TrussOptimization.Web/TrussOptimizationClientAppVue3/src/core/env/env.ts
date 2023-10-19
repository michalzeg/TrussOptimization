let env;
export default (env = {
  url: process.env.VUE_APP_API_URL,
  // tslint:disable-next-line:triple-equals
  isProduction: process.env.VUE_APP_IS_PRODUCTION == "true"
});
