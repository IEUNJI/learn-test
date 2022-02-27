import React from 'react';

const Message = props => {
  const { message } = props;
  const { content } = message;

  return (
    <li className="list-group-item">
      {content}
    </li>
  );
};

export default Message;
