import { FiX } from 'react-icons/fi';
import { ReactNode } from 'react';


interface DrawerProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

export default function Drawer({ isOpen, onClose, children }: DrawerProps) {
    return (
        <>
        {/* Drawer panel */}
        <div
            className={`
                fixed top-0 left-0 h-full w-64 bg-white shadow-lg
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                z-[9999]
                `}
                style={{ willChange: 'transform' }}
                >
            <button onClick={onClose} className="p-4">
            <FiX size={24}/>
            </button>
            {children}
        </div>
    
        {/* Backdrop */}
        {isOpen && (
            <div
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-40 z-[9998]"
            />
        )}
        </>
    )
}
