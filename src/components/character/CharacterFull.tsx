import { motion } from 'framer-motion';
import usePlayersStore from "../../store/playersStore.ts";
import { positions } from "../cells/positions.ts";
import useCharacterDetailPopup from "../../store/characterDetailPopupStore.ts";

interface CharacterFullProps {
    playerId: number,
    height?: number
}

export const CharacterFull = ({playerId, height = 100}: CharacterFullProps) => {
    const playersStore = usePlayersStore();
    const currentPlayer = playersStore.players.find(x => x.id == playerId)!
    const position = usePlayerPosition(playerId)
    const {showPopup} = useCharacterDetailPopup()
    
    if (currentPlayer) {
        return (
            <motion.img
                initial={ position }
                animate={ position }
                transition={ {duration: 1, ease: 'easeInOut'} }
                onClick={() => showPopup(playerId)}
                src={ `/characters/roles/${currentPlayer.rank}.png` }
                style={ {
                    zIndex: 100,
                    position: 'absolute',
                    top: 0,
                    cursor: 'pointer',
                    left: 0,
                    width: 60,
                    height: height,
                    filter: `drop-shadow(-1px -1px 0 ${currentPlayer.color})
                             drop-shadow(1px -1px 0 ${currentPlayer.color})
                             drop-shadow(-1px 1px 0 ${currentPlayer.color})
                             drop-shadow(1px 1px 0 ${currentPlayer.color})`
                } }
            />
        );
    }
};

type PlayerPosition = {
    x: number,
    y: number,
}

function usePlayerPosition(playerId: number): PlayerPosition {
    const playersStore = usePlayersStore();
    const currentPlayer = playersStore.players.find(x => x.id == playerId)!
    const playersOnSameCell = playersStore.players.filter(x => x.position == currentPlayer.position)
    const positionInCell = playersOnSameCell.findIndex(x => x.id == currentPlayer.id)
    
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const delta = DELTA[playersOnSameCell.length][positionInCell]

    return { 
        x: positions[currentPlayer.position].x - 30 + delta.x, 
        y: positions[currentPlayer.position].y - 50 + delta.y  
    }
}

// количество игроков -> позиция в списке -> смещение относительно центра точки
const DELTA = {
    1: {
        0: {
           x: 0,
           y: 0, 
        }  
    },
    2: {
        0: {
            x: -22,
            y: 0,
        },
        1: {
            x: 22,
            y: 0,
        }
    },
    3: {
        0: {
            x: -50,
            y: 0,
        },
        1: {
            x: 0,
            y: 0,
        },
        2: {
            x: 50,
            y: 0,
        }
    },
    4: {
        0: {
            x: -22,
            y: -25,
        },
        1: {
            x: 22,
            y: -25,
        },
        2: {
            x: -22,
            y: 25,
        },
        3: {
            x: 22,
            y: 25,
        }
    },
    5: {
        0: {
            x: -50,
            y: -25,
        },
        1: {
            x: 0,
            y: -25,
        },
        2: {
            x: 50,
            y: -25,
        },
        3: {
            x: -22,
            y: 25,
        },
        4: {
            x: 22,
            y: 25,
        }
    },
    6: {
        0: {
            x: -50,
            y: -25,
        },
        1: {
            x: 0,
            y: -25,
        },
        2: {
            x: 50,
            y: -25,
        },
        3: {
            x: -50,
            y: 25,
        },
        4: {
            x: 0,
            y: 25,
        },
        5: {
            x: 50,
            y: 25,
        }
    }
}