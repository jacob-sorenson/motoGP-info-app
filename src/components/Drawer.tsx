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




// export default function Drawer({ isOpen, onClose, children }: DrawerProps) {
//     return (
//         <div className={`fixed inset-0 z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//             <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
//                 <div className="relative w-64 bg-white h-full shadow-lg">
//                     <button className="absolute top-4 right-4 text-gray-600" onClick={onClose}>
//                         <FiX size={24} />
//                     </button>
//                 <div className="p-4">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// }