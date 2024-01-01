import  { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
const BirthdayContext = createContext();

export const UseBirthdayContext = () => {
  const context = useContext(BirthdayContext);
  if (!context) {
    throw new Error('useBirthdayContext must be used within a BirthdayProvider');
  }
  return context;
};

export const BirthdayProvider = ({ children }) => {
  const [inforBirthday, setInforBirthday] = useState(false);

  const toggleInforBirthday = () => {
    setInforBirthday(true);
  };

  const value = {
    inforBirthday,
    toggleInforBirthday,
  };

  return <BirthdayContext.Provider value={value}>{children}</BirthdayContext.Provider>;
};

BirthdayProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
