import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";
import { PencilIcon } from '@heroicons/react/solid'
const ProductPage = () => {

  const location = useLocation()
  const products = useSelector(state => state.products)

  const [product, setProduct] = useState([])
  const [edit, setEdit] = useState(false)

  
  
  useEffect(() => {
    const id = location.pathname.split('/')[2];
    // console.log(products.filter(p => p.id == id));
    setProduct(products.filter(p => p.id == id))

  }, [])

  
  // if (product.length == 0)
  //   return <Navigate to="/404" />

  return (
    <div className='h-screen w-full bg-zinc-100 flex flex-col px-20'>
      <div className='w-full h-64 flex flex-col justify-center text-Primary'>
          <div className="flex ">
            <h1 className='text-5xl font-light'>
              { product[0] && 
                product[0].name
              }
            </h1>
            {edit &&
              <PencilIcon className="w-6 h-6" />
            }
          </div>
          <div className="">
            <h2 className="text-Txt font-light mt-5">
              
                REF #
                { product[0] && 
                  product[0].ref
                }
            </h2>

          </div>
      </div>
      <div className='w-full h-[28rem] flex flex-col'>
        <div className='w-full flex space-x-10'>
            <div className='flex flex-col w-1/2'>

            </div>

            <div className='flex flex-col w-1/2'>

            </div>

        </div>
        {!edit ? 
          <button type='button' onCLick={() => setEdit(true)} className="px-2 py-1 bg-Primary rounded mx-auto text-white text-sm mt-16 font-light" >
            MODIFIER LE PRODUIT
          </button> :
          <button type='button' onCLick={() => setEdit(false)} className="px-2 py-1 bg-Primary rounded mx-auto text-white text-sm mt-16 font-light" >
            ENREGITRER
          </button>
        }
      </div>
    </div>
  )
}

export default ProductPage