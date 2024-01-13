import  { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <PostContext.Provider value={{ show, toggleShow }}>
      {children}
    </PostContext.Provider>
  );
};

const UseBirthdayContext = () => {
  const context = useContext(PostProvider);
  if (!context) {
    throw new Error(
      'useBirthdayContext must be used within a BirthdayProvider'
    );
  }
  return context;
};

export { PostProvider, UseBirthdayContext };



PostProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
