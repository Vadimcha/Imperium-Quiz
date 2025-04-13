import {motion} from 'framer-motion';
import usePlayersStore from "../../store/playersStore.ts";

interface CharacterFullProps {
  playerId: number,
}

export const CharacterFull = ({ playerId }: CharacterFullProps) => {
  const playersStore = usePlayersStore();

  return (
    <motion.img
      initial={playersStore.getPosition(playerId)}
      animate={playersStore.getPosition(playerId)}
      transition={{ duration: 1, ease: 'easeInOut' }}
      src={`/characters/full/full_${playerId}.png`}
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
