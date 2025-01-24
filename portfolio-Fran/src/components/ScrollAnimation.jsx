import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({  children, value = 0.2 }) => {
  const [ref, inView] = useInView({
    threshold: value, // Trigger when 20% of the element is visible
    triggerOnce: true, // Trigger only once
  });

  return (
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }} // Mueve hacia abajo por 20px
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 1.1, ease: 'easeOut' }}
>
  {children}
</motion.div>
  );
};

export default ScrollAnimation;
