describe('测试 matcher', () => {
  it('演示 matcher 的用法', () => {
    expect(1 + 1).toBe(2);

    expect({ name: 'ieunji' }).toEqual({ name: 'ieunji' });

    expect(null).toBeNull();

    expect(undefined).toBeUndefined();

    expect([1, 2, 3]).toContain(2);

    expect({ name: 'ieunji', age: 18 }).toHaveProperty('name');

    expect('123').toContain('2');

    expect('abc').toMatch(/\w+/);

    expect([1, 2, 3]).not.toContain(4);
  });
});
