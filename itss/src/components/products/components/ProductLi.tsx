import { TrashIcon } from '@heroicons/react/solid'

const ProductLi = () => {

    const deleteProduct = () => {

    }

  return (
    <li className='w-full flex  py-4 font-light hover:bg-Primary/10 transition-all'>
        <div className='w-1/5 ml-5'>Produit 1</div>
        <div className='w-1/5'>Type 1</div>
        <div className='w-1/5'>0154FO8475</div>
        <div className='w-1/5'>12.99 $</div>
        <button type='button' onClick={() => deleteProduct} className='w-1/5 flex justify-end lg:pr-20 md:pr-10 pr-5 cursor-pointer'>
            <TrashIcon className='w-5 h-5 text-Primary ' />
        </button>
    </li>
  )
}

export default ProductLi