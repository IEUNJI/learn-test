import React from 'react';
import { mount } from 'enzyme';
import Message from '../components/Message';

describe('测试 Message', () => {
  it('Message 为 li 标签，类名为 list-group-item，内容为 ieunji', () => {
    const message = { id: 1, content: 'ieunji' };

    const wrapper = mount(<Message message={message} />);

    const liItems = wrapper.find('li');

    expect(liItems).toHaveLength(1);
    expect(liItems.prop('className')).toBe('list-group-item');
    expect(liItems.prop('children')).toBe('ieunji');
  });
});
