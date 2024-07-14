import React from 'react';
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
  const { user, onClose } = useTelegram();
  const receiver = user?.receiver;

  return (
    <div className="header">
      {receiver && (
        <div className="receiver-info">
          <h2>Receiver Info:</h2>
          <p>ID: {receiver.id}</p>
          <p>Name: {receiver.name}</p>
          {/* Выводите другие данные о получателе, если они доступны */}
        </div>
      )}
      <span className="username">
        {user?.nickname}
      </span>
    </div>
  );
};

export default Header;