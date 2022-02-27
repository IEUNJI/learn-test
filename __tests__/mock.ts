import axios from 'axios';
import { exec, getUsers, delay } from '../src/mock';

jest.mock('axios'); // mock axios
jest.useFakeTimers();

describe('测试 mock', () => {
  it('测试 exec with return abc', () => {
    const callback = jest.fn();
    callback.mockReturnValue('abc');

    exec(callback);

    expect(callback).toBeCalled();
    expect(callback).toBeCalledTimes(2);
    expect(callback).toBeCalledWith('123');
    expect(callback).toBeCalledWith('456');
  });

  it('测试 exec with return undefined', () => {
    const callback = jest.fn();

    exec(callback);

    expect(callback).toBeCalledTimes(1);
  });

  it('测试 getUsers', async () => {
    axios.get.mockResolvedValue({ data: { code: 0 } });

    const result = await getUsers();

    expect(result.data).toEqual({ code: 0 });
  });

  it('测试 delay', done => {
    delay(result => {
      expect(result).toBe(5000);
      done();
    }, 5000);

    jest.runAllTimers();
  });
});
