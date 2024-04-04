'use client';

import {
  modalDarkBackgroundAnimation,
  popupContainerSpringAnimation,
} from '@/animations/modalAnimations';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { AptModalPopupContainerInterface } from './types';

const AptModalPopupContainer = ({
  isShown,
  children,
  onClose,
}: AptModalPopupContainerInterface) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const handleClickEvent = {
    modalClose: function (this: HTMLDivElement, event: MouseEvent) {
      event.preventDefault();
      if (isShown) onClose();
    },
  };

  useEffect(() => {
    if (backgroundRef.current) {
      backgroundRef.current.addEventListener(
        'click',
        handleClickEvent.modalClose,
      );
    }
    return () => {
      if (backgroundRef.current) {
        backgroundRef.current.removeEventListener(
          'click',
          handleClickEvent.modalClose,
        );
      }
    };
  }, [backgroundRef.current, isShown]);
  return (
    <>
      <AnimatePresence>
        {isShown && (
          <div className='fixed top-0 left-0 z-[2000] w-full h-full'>
            <motion.div
              ref={backgroundRef}
              variants={modalDarkBackgroundAnimation}
              initial={'hidden'}
              animate={'show'}
              className='w-full h-full bg-[#00000050]'
            >
              &nbsp;
            </motion.div>
            <motion.div
              variants={popupContainerSpringAnimation}
              initial={'hidden'}
              animate={'show'}
              className='position-center flex flex-col justify-center h-auto bg-transparent w-[90%]'
            >
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AptModalPopupContainer;
