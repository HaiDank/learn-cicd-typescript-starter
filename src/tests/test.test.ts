import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "src/api/auth";
import { describe, expect, test } from "vitest";

const person = {
  isActive: true,
  age: 32,
};

describe("person", () => {
  test("test auth", () => {
    const headers: IncomingHttpHeaders = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

});