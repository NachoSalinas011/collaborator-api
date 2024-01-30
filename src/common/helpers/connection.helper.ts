import 'dotenv/config';

const user: string = process.env.DATABASE_USER;
const password: string = process.env.DATABASE_PASSWORD;
const database: string = process.env.DATABASE_NAME;

const cnnString: string = `mongodb+srv://${user}:${password}@cluster0.zyn71r2.mongodb.net/${database}?retryWrites=true&w=majority`;

export { cnnString };

