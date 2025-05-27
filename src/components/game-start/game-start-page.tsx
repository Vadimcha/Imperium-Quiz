import { FC, memo, useState } from "react";
import { Button, Textfield } from "react-untitled-ui";
import useGameStartStore from "../../store/gameStartStore.ts";
import styles from "./game-start.module.scss";
import {ICharacter} from "../../data/characters.ts";


export const GameStartPage: FC = memo(() => {
    const gameStartStore = useGameStartStore() 
    
    return <div className={styles.container}>
        <h3 className={styles.text}>Imperium Quiz</h3>
        {
            gameStartStore.players.map((player, position) => {
                return <PlayerInput key={player.id} player={player} position={position}/>
            })
        }
        <Button
            disabled={ gameStartStore.players.length < 2 }
            onClick={ gameStartStore.startGame }
            className={styles.button}
            style={{ marginTop: "12px" }}
            variant="primary">
            Начать!
        </Button>
        <Button
            disabled={ gameStartStore.players.length >= 6 }
            onClick={ gameStartStore.addPlayer }
            className={styles.button}
            variant="secondary">
            Новый игрок
        </Button>
    </div>
})


export type PlayerInputProps = {
    player: ICharacter,
    position: number,
}

export const PlayerInput: FC<PlayerInputProps> = memo(props => {
    const [value, setValue] = useState<string>(props.player.name)
    const gameStartStore = useGameStartStore()
    
    const handleChange = (value: string) => {
        gameStartStore.changePlayerName(props.position, value)
        setValue(value)
    }
    
    return <div className={styles.player}>
        <div 
            style={{ backgroundColor: props.player.color }}
            className={styles.avatar}/>
        <Textfield
            value={value}
            style={{ width: "100%" }}
            onChange={ e => handleChange(e.target.value)}/>
    </div>
})