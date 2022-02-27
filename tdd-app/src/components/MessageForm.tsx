import React, { useState } from 'react';

const MessageList = props => {
  const { addMessage } = props;
  const [content, setContent] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (content) {
      addMessage(content);
      setContent('');
    }
  };

  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="请输入"
          value={content}
          onChange={event => setContent(event.target.value)}
        />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >发表</button>
      </div>
    </form>
  );
};

export default MessageList;
