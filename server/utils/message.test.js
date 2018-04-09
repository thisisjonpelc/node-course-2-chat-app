var expect = require("expect");

var {generateMessage} = require("./message");

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    var result = generateMessage("Jon", "What's up man?");

    expect(result.from).toBe("Jon");
    expect(result.text).toBe("What's up man?");
    expect(result.createdAt).toBeA("number");
  });
})
