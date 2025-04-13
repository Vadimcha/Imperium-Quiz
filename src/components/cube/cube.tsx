import { FC, memo } from "react";
import { BasePopup } from "../base-popup";
import useGameStore from "../../store/gameStore.ts";
import styles from "./cube.module.scss";
import Lottie from "lottie-react";
import cube1 from "../../assets/cube/cube_1.json"
import cube2 from "../../assets/cube/cube_2.json"
import cube3 from "../../assets/cube/cube_3.json"
import cube4 from "../../assets/cube/cube_4.json"
import cube5 from "../../assets/cube/cube_5.json"
import cube6 from "../../assets/cube/cube_6.json"
import { AnimatePresence, motion } from "framer-motion";

const animations = [
    cube1,
    cube2,
    cube3,
    cube4,
    cube5,
    cube6
]

export type CubeProps = {
    
}

export const Cube: FC<CubeProps> = memo(() => {
    const store = useGameStore()
    
    return <BasePopup
        visible={!!store.cubicValue}
        toggle={() => {}}
    >
        <AnimatePresence mode="wait">
            { store.cubicValue && (
                <Lottie
                    animationData={ animations[store.cubicValue - 1] }
                    autoplay
                    loop={false}
                    className={styles.cubic}
                />
            ) }
        </AnimatePresence>
    </BasePopup>
})