var expect = require("expect");

var {generateMessage, generateLocationMessage} = require("./message");

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    var result = generateMessage("Jon", "What's up man?");

    expect(result.from).toBe("Jon");
    expect(result.text).toBe("What's up man?");
    expect(result.createdAt).toBeA("number");
  });
})

describe("generateLocationMessage", () => {
  it("should generate correct location object", () => {
    var result = generateLocationMessage("Jon", 100, 100);

    expect(result.from).toBe("Jon");
    expect(result.url).toBe("https://www.google.com/maps?q=100,100");
    expect(result.createdAt).toBeA("number");
  });
});
