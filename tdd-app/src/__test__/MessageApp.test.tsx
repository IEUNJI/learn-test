import React from 'react';
import { mount } from 'enzyme';
import MessageApp from '../components/MessageApp';
import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';

describe('测试 MessageApp', () => {
  it('渲染出一个面板', () => {
    const wrapper = mount(<MessageApp />);

    const panel = wrapper.find('.panel.panel-default');
    const heading = wrapper.find('.panel-heading');
    const body = wrapper.find('.panel-body');
    const footer = wrapper.find('.panel-footer');

    expect(panel).toBeTruthy();
    expect(heading).toBeTruthy();
    expect(body).toBeTruthy();
    expect(footer).toBeTruthy();
  });

  it('默认状态是一个空组件', () => {
    const wrapper = mount(<MessageApp />);

    expect(wrapper.state()).toMatchObject({
      messages: []
    });
  });

  it('MessageList 组件存在，需要把 state 里的 messages 数组传给 messageList', () => {
    const wrapper = mount(<MessageApp />);
    const messageList = wrapper.find(MessageList);

    expect(messageList.prop('messages')).toBe((wrapper.instance().state as any).messages);
  });

  it('MessageForm 组件存在，需要把 addMessage 方法传给 MessageForm', () => {
    const wrapper = mount(<MessageApp />);
    const messageForm = wrapper.find(MessageForm);

    expect(messageForm.prop('addMessage')).toBe((wrapper.instance() as any).addMessage);
  });

  it('点击提交按钮，文本框如果有内容，应该往 App 组件添加一条新状态', () => {
    const wrapper = mount(<MessageApp />);
    const messageForm = wrapper.find(MessageForm);
    const messageList = wrapper.find(MessageList);

    const input = messageForm.find('input');
    const button = messageForm.find('button');

    let content = '新消息';
    input.simulate('change', {
      target: { value: content }
    });
    button.simulate('click');

    const newMessage = [{
      id: expect.any(String),
      content
    }];
    expect(wrapper.state('messages')).toEqual(newMessage);
  });
});
