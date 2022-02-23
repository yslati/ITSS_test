import ProductLi from './components/ProductLi';
import { useSelector, useDispatch } from 'react-redux';

const Products = () => {

  const products = useSelector(state => state.products)


  const clearList = () => {
    console.log("list cleared");
    
  }

  // console.log(products);
  

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
        {/* {
          <h1 className='text-Primary font-light'>
            Vous n'avaez enregitre aucun produit pour le moment.
          </h1>
        } */}
        <ul className='w-full'>
          <li className='w-full flex items-center py-4 border-b border-gray-300 font-light select-none'>
            <div className='w-1/5 ml-5'>Nom</div>
            <div className='w-1/5'>Type</div>
            <div className='w-1/5'>Reference</div>
            <div className='w-1/5'>Prix</div>
            <div className='w-1/5'></div>
          </li>
          <ProductLi />
          <ProductLi />
          <ProductLi />
          <ProductLi />
        </ul>
      </div>
    </div>
  )
}

export default Products