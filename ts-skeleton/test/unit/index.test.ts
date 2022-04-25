import { skeleton } from "../../src/index";

describe("skeleton", () => {
  it("should return greeting with name provided", () => {
    const greeting = skeleton("nessieSnippets");
    expect(greeting).toBe("Hello nessieSnippets, welcome to the skeleton repo");
  });
});
