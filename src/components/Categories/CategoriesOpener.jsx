import React from 'react';
import { OpenerContainerStyled, OpenerTitle, OpenerWrapper } from './Categories';
import { FaArrowRight } from "react-icons/fa";
import { AnimatePresence } from 'framer-motion';

const CategoriesOpener = ({ onClick }) => {
  return (
    <AnimatePresence>
      <OpenerContainerStyled
        initial={{ translateX: -500 }}
        animate={{ translateX: 0 }}
        exit={{ translateX: -500, opacity: 0 }}
        transition={{ type: "spring", damping: 27, duration: 0.1 }}
        key="menu-categories"
      >
        <OpenerWrapper>
          <OpenerTitle>
            <FaArrowRight onClick={onClick} />
          </OpenerTitle>
        </OpenerWrapper>
      </OpenerContainerStyled>
    </AnimatePresence>
  );
};

export default CategoriesOpener;
