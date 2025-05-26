import { motion } from 'framer-motion';
import usePlayersStore from "../../store/playersStore.ts";

interface CharacterFullProps {
    playerId: number,
    height?: number
}

export const CharacterFull = ({playerId, height = 100}: CharacterFullProps) => {
    const playersStore = usePlayersStore();
    const currentPlayer = playersStore.players.find(x => x.id == playerId)!

    if (currentPlayer) {
        return (
            <motion.img
                initial={ playersStore.getPosition(playerId) }
                animate={ playersStore.getPosition(playerId) }
                transition={ {duration: 1, ease: 'easeInOut'} }
                src={ currentPlayer.fullImg }
                style={ {
                    zIndex: 100,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 80,
                    height: height,
                } }
            />
        );
    }

};
