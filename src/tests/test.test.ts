import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "src/api/auth";
import { describe, expect, test } from "vitest";

describe("Api", () => {
  test("test auth", () => {
    const headers: IncomingHttpHeaders = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
