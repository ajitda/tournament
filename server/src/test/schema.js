import EasyGraphQLTester from "easygraphql-tester";
import mocha from "mocha";
import gql from "graphql-tag";
import { expect } from "chai";

import schema from "../schema/index.js";

describe("Test Schema, Queries and Mutation", () => {
  it("should return schema types", async () => {
    const schemaTest = await schema; // returns a schemaComposer.buildSchema();
    const tester = new EasyGraphQLTester(schemaTest);
    const query = gql`
      {
        __schema {
          types {
            name
          }
        }
      }
    `;
    const result = await tester.graphql(query);

    expect(result).to.be.ok;
    expect(result.data).to.be.ok;
    expect(result.data.__schema).to.be.ok;
  });
});
