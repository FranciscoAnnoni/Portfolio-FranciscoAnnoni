import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Componente de animación específico para las tarjetas de proyectos
const ProjectCardAnimation = ({ children, index, direction = "left" }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Configuramos la dirección: izquierda o derecha
  const xOffset = direction === "left" ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xOffset }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }}
      transition={{ 
        duration: 0.4,
        delay: 0, // Efecto escalonado basado en el índice
        ease: [0.1, 0.1, 0.1, 1] // Curva de easing personalizada para un movimiento más natural
      }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default ProjectCardAnimation;