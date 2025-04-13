import './CharacterAvatar.css'
import useGameStore from "../../store/gameStore.ts";

export const CharacterAvatar = () => {
  const { activePlayer } = useGameStore()
  return (
    <img
      className={"avatar"}
      src={`/characters/head/head_${activePlayer}.png`}
      alt="avatar"
    />
  );
};
