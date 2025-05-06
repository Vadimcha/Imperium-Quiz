import { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom"

export type PortalProps = {
    children: ReactNode
}

export const Portal: FC<PortalProps> = (props) => {
    const [container] = useState(document.createElement("div"))
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        if (!container) return

        setMounted(true)
        container.className = "portal"
        document.body.appendChild(container)

        return () => {
            document.body.removeChild(container)
            setMounted(false)
        }
    }, [])

    return mounted && container ? createPortal(<>{ props.children }</>, container) : null
}