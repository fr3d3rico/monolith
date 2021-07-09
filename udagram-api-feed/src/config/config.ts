export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
  // "username": "postgres",
  // "password": "fred123",
  // "database": "docker",
  // "host": "localhost",
  // "dialect": "postgres",
  // "aws_region": "us-east-1",
  // "aws_profile": "default",
  // "aws_media_bucket": "udagram-906381044240-prod",
  // "jwt": {
  //   "secret": "helloworld"
  // },
  // "url": "http://localhost:4200"
};
