import { _method } from "./test01";

test('test', function () {
    var expected = "";
    var result = _method();
    expect(result).toBe(expected);
});
