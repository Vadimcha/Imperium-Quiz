import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Portal } from "../../utils/Portal";
import styles from "./base-popup.module.scss";

type Props = {
    visible: boolean;
    toggle: () => void;
    children: React.ReactNode;
};

export const BasePopup: React.FC<Props> = ({ visible, toggle, children }) => {
    return (
        <Portal>
            <AnimatePresence>
                {visible && (
                    <div className={styles.overlay}>
                        <motion.div
                            data-testid="shadow"
                            className={styles.shadow}
                            onClick={toggle}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />

                        <motion.div
                            className={styles.content}
                            initial={{ opacity: 0, y: "-10%" }}
                            animate={{ opacity: 1, y: "0%" }}
                            exit={{ opacity: 0, y: "-3%" }}
                            transition={{ duration: 0.3 }}
                        >
                            {children}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </Portal>
    );
};
