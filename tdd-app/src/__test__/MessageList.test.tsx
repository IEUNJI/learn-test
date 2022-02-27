import React from 'react';
import { mount } from 'enzyme';
import MessageList from '../components/MessageList';

describe('测试 MessageList', () => {
  it('向组件传递两个消息，应该渲染出两个 li', () => {
    const messages = [
      { id: 1, content: 'ieunji-1' },
      { id: 2, content: 'ieunji-2' }
    ];

    const wrapper = mount(<MessageList messages={messages} />);

    const liItems = wrapper.find('li');

    expect(liItems).toHaveLength(2);
    expect(liItems.at(0).text()).toContain('1');
    expect(liItems.at(1).text()).toContain('2');
  });
});
