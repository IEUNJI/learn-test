import { add, minus, multiply, divide } from '../src/math';

describe('测试 add', () => {
  it('test 2 + 4 = 6', () => {
    expect(add(2, 4)).toBe(6);
  });

  it('test 3 + 3 = 6', () => {
    expect(add(3, 3)).toBe(6);
  });
});

describe('测试 minus', () => {
  it('test 2 - 4 = -2', () => {
    expect(minus(2, 4)).toBe(-2);
  });

  it('test 3 - 3 = 0', () => {
    expect(minus(3, 3)).toBe(0);
  });
});

describe('测试 multiply', () => {
  it('test 2 * 4 = 8', () => {
    expect(multiply(2, 4)).toBe(8);
  });

  it('test 3 * 3 = 9', () => {
    expect(multiply(3, 3)).toBe(9);
  });
});

describe('测试 divide', () => {
  it('test 2 / 4 = 0.5', () => {
    expect(divide(2, 4)).toBe(0.5);
  });

  it('test 3 / 3 = 1', () => {
    expect(divide(3, 3)).toBe(1);
  });
});
