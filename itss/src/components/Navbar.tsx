import { BookmarkAltIcon } from '@heroicons/react/solid'
import { ViewGridAddIcon, LogoutIcon } from '@heroicons/react/outline'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation()

  return (
    <div className='h-screen w-96 bg-white flex items-center px-10 select-none'>
        <div className='h-2/4 flex flex-col justify-around'>
            <Link to="/products" className={`flex w-full ${location.pathname === '/products' ? "text-Primary": "text-black"} text-sm space-x-4 items-center cursor-pointer`}>
                <BookmarkAltIcon className='w-5 h-5' />
                <h2 className='font-medium'>
                    PRODUITS
                </h2>
            </Link>
            <Link to="/product/add" className={`flex w-full ${location.pathname === '/product/add' ? "text-Primary": "text-black"} text-sm space-x-4 items-center cursor-pointer`}>
                <ViewGridAddIcon className='w-5 h-5' />
                <h2 className='font-medium'>
                    AJOUTER UN PRODUIT
                </h2>
            </Link>
            <Link to="/login" className='flex w-full text-red-500 text-sm space-x-4 items-center cursor-pointer'>
                <LogoutIcon className='w-5 h-5' />
                <h2 className='font-medium'>
                    DECONNEXION
                </h2>
            </Link>
        </div>
    </div>
  )
}

export default Navbar