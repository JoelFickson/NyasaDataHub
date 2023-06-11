declare global {
  namespace Express {
    export interface Request {
      User: T,
      validatedBody: T,

    }
  }
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
      PORT: number;


      DEV_DB_PASSWORD: string;
      DEV_DB_USER: string;
      DEV_DB_NAME: string;
      DEV_DB_HOST: string;

      STAGING_DB_PASSWORD: string;
      STAGING_DB_USER: string;
      STAGING_DB_NAME: string;
      STAGING_DB_HOST: string;


      PROD_DB_PASSWORD: string;
      PROD_DB_USER: string;
      PROD_DB_NAME: string;
      PROD_DB_HOST: string;


    }
  }
}

export {};

