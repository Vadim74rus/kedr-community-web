import React from 'react';
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className="header">
      <span className="username">
        {user?.nickname}
      </span>
    </div>
  );
};

export default Header;;