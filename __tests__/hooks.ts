let counter = 0;

function log(...args) {
  // console.log(...args);
}

describe('测试 hooks', () => {
  beforeAll(() => {
    log('beforeAll');
    counter++;
  });

  beforeEach(() => {
    log('beforeEach');
    counter++;
  });

  afterEach(() => {
    log('afterEach');
    counter++;
  });

  afterAll(() => {
    log('afterAll');
    counter++;

    log(counter);
  });

  it('测试用例 1', () => {
    log('测试用例 1');
    counter++;
  });

  it('测试用例 2', () => {
    log('测试用例 2');
    counter++;
  });
});
