import { remove, addEventListener } from '../src/domUtils';

describe('测试 dom', () => {
  it('测试 remove', () => {
    document.body.innerHTML = `
      <div id="parent">
        <div id="child">儿子</div>
      </div>
    `;

    const parent = document.getElementById('parent');
    expect(parent.nodeName.toLowerCase()).toBe('div');

    const child = document.getElementById('child');
    expect(child.nodeName.toLowerCase()).toBe('div');
    remove(child);
    expect(document.getElementById('child')).toBeNull();
  });

  it('测试 addEventListener', () => {
    document.body.innerHTML = `
      <div id="parent">
        <button id="clickMe">click</button>
      </div>
    `;

    const clickMe = document.getElementById('clickMe');
    addEventListener(clickMe, 'click', () => {
      clickMe.innerHTML = 'clicked';
    });
    clickMe.click();
    expect(clickMe.innerHTML).toBe('clicked');
  });
});
