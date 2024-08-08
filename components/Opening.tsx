// OpeningAnimation.js
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const OpeningAnimation = () => {
  const backgroundControls = useAnimation();
  const textControls = useAnimation();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Start the text animation
    textControls.start({
      opacity: 1,
      transition: { duration: 1 }
    }).then(() => {
      return textControls.start({
        opacity: 0,
        transition: { duration: 2 }
      });
    }).then(() => {
      return backgroundControls.start({
        opacity: 0,
        transition: { duration: 3 }
      });
    }).then(() => {
      setHide(true);
    });
  }, [backgroundControls, textControls]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={backgroundControls}
      className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black-100 z-50 ${hide ? 'hidden' : ''}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={textControls}
        className="text-center"
      >
        <TextGenerateEffect
          className='text-[40px] md:text-5xl lg:text-6xl'
          words='Welcome To My Portfolio' />
      </motion.div>
    </motion.div>
  );
};

export default OpeningAnimation;
