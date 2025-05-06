import {motion} from 'framer-motion';
import usePlayersStore from "../../store/playersStore.ts";
import {characters} from "../../data/characters.ts";

interface CharacterFullProps {
  playerId: number,
  height?: number
}

export const CharacterFull = ({ playerId, height = 100 }: CharacterFullProps) => {
  const playersStore = usePlayersStore();

  return (
    <motion.img
      initial={playersStore.getPosition(playerId)}
      animate={playersStore.getPosition(playerId)}
      transition={{ duration: 1, ease: 'easeInOut' }}
      src={characters[playerId].fullImg}
      style={{
        zIndex: 100,
        position: 'absolute',
        top: 0,
        left: 0,
        width: 80,
        height: height,
      }}
    />
  );
};
