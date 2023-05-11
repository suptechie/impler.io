declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface ProcessEnv {
    PORT: number;
    JWT_SECRET: string;
    NODE_ENV: 'test' | 'prod' | 'dev' | 'ci' | 'local';

    MONGO_URL: string;
    RABBITMQ_CONN_URL: string;

    S3_LOCAL_STACK: string;
    S3_REGION: string;
    S3_BUCKET_NAME: string;
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;

    WEB_BASE_URL: string;
    API_ROOT_URL: string;
    FRONT_BASE_URL: string;

    GITHUB_OAUTH_REDIRECT: string;
    GITHUB_OAUTH_CLIENT_ID: string;
    GITHUB_OAUTH_CLIENT_SECRET: string;

    SENTRY_DSN: string;
  }
}
