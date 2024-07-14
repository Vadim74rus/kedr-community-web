import React from 'react';
import { useTelegram } from "../../hooks/useTelegram";
import {receiveMessageOnPort} from "node:worker_threads";

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className="header">
      <span className="username">
        {user?.username}
          {receiver?.receiver}
      </span>
    </div>
  );
};

export default Header;