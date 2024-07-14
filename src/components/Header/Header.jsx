import React from 'react';
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className="header">
        <span className="username">
        {user?.username}
            {user?.name}
      </span>
    </div>
  );
};

export default Header;