import React from 'react';
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
  const {user, onClose } = useTelegram();

  return (
    <div className="header">
      <span className="username">
        {user?.username}
      </span>
    </div>
  );
};

export default Header;