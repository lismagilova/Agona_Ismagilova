import { useState, useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'


interface PortalProps {
    children: ReactNode
}


export const Portal = ({ children }: PortalProps) => {
    const [container] = useState(document.createElement('div'))
    container.classList.add('portal-root')

    useEffect(() => {
        document.body.appendChild(container)

        return () => {
            document.body.removeChild(container)
        }
    }, [])

    return createPortal(children, container)
}