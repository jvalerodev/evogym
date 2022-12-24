import { motion } from 'framer-motion';

const defaultVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

type Props = {
  children: JSX.Element | JSX.Element[];
  delay?: number;
  variant?: {};
  styles?: string;
};

const Animation = ({
  children,
  delay = 0,
  variant = defaultVariant,
  styles
}: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay }}
      variants={variant}
      className={styles}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
