import React from 'react';
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
  const {tg, user, username, onClose } = useTelegram();

  return (
    <div className="header">
      <span className="username">
        {tg.initDataUnsafe?.user?.username}
      </span>
    </div>
  );
};

export default Header;