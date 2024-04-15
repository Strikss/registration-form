const env = import.meta.env;

const config = {
  ...env,
  IS_DEVELOPMENT: env.DEV,
};

export default config;
