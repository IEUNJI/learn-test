import { callCallback, callPromise } from '../src/api';

describe('测试 api 异步', () => {
  it('测试 callCallback', done => {
    callCallback(result => {
      expect(result).toEqual({ code: 0 });
      done();
    });
  });

  it('测试 callPromise', async () => {
    const result = await callPromise();
    expect(result).toEqual({ code: 0 });
  });
});
