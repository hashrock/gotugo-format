const gotugo = require("./index.js");

// 来年になったら壊れる悲しいテストです。FIXME

test("parseLine", () => {
  expect(gotugo.parseLine("2019年11月17日（日）").toString()).toBe(
    "Sun Nov 17 2019 00:00:00 GMT+0900 (東京 (標準時))"
  );
  expect(gotugo.parseLine("11月17日").toString()).toBe(
    "Sun Nov 17 2019 00:00:00 GMT+0900 (東京 (標準時))"
  );
  expect(gotugo.parseLine("11/17").toString()).toBe(
    "Sun Nov 17 2019 00:00:00 GMT+0900 (東京 (標準時))"
  );
});

test("serialize", () => {
  const example = gotugo.parseLine("2019年11月17日（日）");
  expect(gotugo.serialize(example)).toBe("11月17日（日）");
});
