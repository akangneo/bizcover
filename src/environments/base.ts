/*
 * Base is the default environment for production.
 * Add everything here and override value in other files if needed.
 * https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
 */
export default function baseEnv(baseApi: string) {
    return {
      route: {
        baseRoute: '/bizflashcover', // Fixes issue with Github Pages
      },
      api: {
        bizCover: `${baseApi}/:controller`,
      },
      isProduction: true,
      isDevelopment: false,
      isTesting: false,
    };
  }
  
  export type Environment = ReturnType<typeof baseEnv>;
  