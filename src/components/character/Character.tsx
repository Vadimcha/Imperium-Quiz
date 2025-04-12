import {motion} from 'framer-motion';
import useGameStore from "../../store/gameStore.ts";
import { positions } from "../cells/positions.ts";

export const Character = () => {
  const { move } = useGameStore();

  return (
    <motion.img
      initial={{
        x: positions[move].x - 40,
        y: positions[move].y - 50,

      }}
      animate={{
        x: positions[move].x - 40,
        y: positions[move].y - 50,
      }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      src={'/character.png'}
      style={{
        zIndex: 100,
        position: 'absolute',
        top: 0,
        left: 0,
        width: 80,
        height: 100,
      }}
    />
  );
};
