import ProductLi from './components/ProductLi';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllProducts } from '../redux/productSlice'

const Products = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products)


  const clearList = () => {
    dispatch()
  }

  return (
    <div className='h-screen w-full bg-zinc-100 flex flex-col px-20'>
      <div className='w-full h-80 flex items-center text-Primary space-x-7'>
        <h1 className=' text-4xl font-light'>
          PRODUITS
        </h1>
        {

          <button type='button' onClick={() => clearList} className='font-light cursor-pointer'>
            Vider la list
          </button>
        }
      </div>
      <div className='w-full h-full'>
        {
          products.length === 0 ?
          <h1 className='text-Primary font-light'>
            Vous n'avaez enregitre aucun produit pour le moment.
          </h1> :  
          <ul className='w-full'>
            <li className='w-full flex items-center py-4 border-b border-gray-300 font-light select-none'>
              <div className='w-1/5 ml-5'>Nom</div>
              <div className='w-1/5'>Type</div>
              <div className='w-1/5'>Reference</div>
              <div className='w-1/5'>Prix</div>
              <div className='w-1/5'></div>
            </li>
            {
              products.map(p => <ProductLi key={p.id} product={p} />)
            }
          </ul>
        }
      </div>
    </div>
  )
}

export default Products