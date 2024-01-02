import  { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const BirthdayContext = createContext();

const BirthdayProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <BirthdayContext.Provider value={{ show, toggleShow }}>
      {children}
    </BirthdayContext.Provider>
  );
};

const UseBirthdayContext = () => {
  const context = useContext(BirthdayContext);
  if (!context) {
    throw new Error(
      'useBirthdayContext must be used within a BirthdayProvider'
    );
  }
  return context;
};

export { BirthdayProvider, UseBirthdayContext };



BirthdayProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
