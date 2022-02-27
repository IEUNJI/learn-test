import React from 'react';
import { mount } from 'enzyme';
import MessageForm from '../components/MessageForm';

describe('测试 MessageForm', () => {
  it('渲染出一个表单，表单有 input 和 button', () => {
    const wrapper = mount(<MessageForm />);

    const form = wrapper.find('form');
    expect(form).toHaveLength(1);

    const input = wrapper.find('input');
    const button = wrapper.find('button');

    expect(input).toHaveLength(1);
    expect(button).toHaveLength(1);
  });

  it('点击按钮时，内容为空，则不能提交表单', () => {
    const addMessage = jest.fn();
    const wrapper = mount(<MessageForm addMessage={addMessage} />);

    const input = wrapper.find('input');
    const button = wrapper.find('button');

    let newValue = '';
    input.simulate('change', {
      target: { value: newValue }
    });

    button.simulate('click');

    expect(addMessage).not.toHaveBeenCalled();
  });

  it('点击按钮时，内容不为空，则可以提交表单', () => {
    const addMessage = jest.fn();
    const wrapper = mount(<MessageForm addMessage={addMessage} />);

    const input = wrapper.find('input');
    const button = wrapper.find('button');

    let newValue = '新内容';
    input.simulate('change', {
      target: { value: newValue }
    });

    button.simulate('click');

    expect(addMessage).toHaveBeenCalledWith(newValue);
  });
});
