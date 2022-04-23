import { buildSchema } from 'graphql';
// import { query } from "./dbconnect.js";

export const schema = buildSchema(`
  type Query {
    greet: String
  }

  type mysqlResponse {
    fieldCount: Int
    afffieldCount: Int
    affectedRows: Int
    insertId: Int
    serverStatus: Int
    warningCount: Int
    message: String
    protocol41: Boolean
    changedRows: Int
}
`);

export const root = {
    greet: () => {
        return "Satan"
    }
};

export default {
    schema,
    root
}