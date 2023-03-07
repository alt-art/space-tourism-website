import React, { createContext, FC, useState } from 'react';

interface ModalContextProps {
  isOpenedModal: boolean;
  setIsOpenedModal: (isOpen: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isOpenedModal: false,
  setIsOpenedModal: () => {}
});

interface Props {
  children: React.ReactNode;
}

export const ModalContextProvider: FC<Props> = ({ children }) => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isOpenedModal,
        setIsOpenedModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
