import { useEffect, useState } from 'react'
import { TrashIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../../redux/productSlice'
import { useNavigate } from 'react-router'

const ProductLi = ({ product }) => {

  const dispatch = useDispatch()
  const naviagte = useNavigate()

  const deleteProduct = (e) => {
    e.preventDefault();
    // dispatch(deleteProduct({ id: product.id }))
  }

  const toUserPage = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <li className='w-full flex  py-4 font-light hover:bg-Primary/10 transition-all cursor-pointer' onCLick={() => toUserPage()}>
        <div className='w-1/5 ml-5'>{ product.name }</div>
        <div className='w-1/5'>{ product.type }</div>
        <div className='w-1/5'>{ product.ref }</div>
        <div className='w-1/5'>{ product.price } $</div>
        <button type="submit" onClick={(e) => deleteProduct(e)} className='w-1/5 flex justify-end lg:pr-20 md:pr-10 pr-5 cursor-pointer'>
            <TrashIcon className='w-5 h-5 text-Primary ' />
        </button>
    </li>
  )
}

export default ProductLi