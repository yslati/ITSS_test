import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../redux/productSlice'

const AddProduct = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [ref, setRef] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)

    const handleSelectedImage = (e: any) => {
        setImage(e.target.files[0])
    }

    const handleSave = () => {
        dispatch(addProduct({
            id: products.length + 1,
            name: name,
            type: type,
            ref: ref,
            price: price,
            
        }))
    }

  return (
    <div className='h-screen w-full bg-zinc-100 flex flex-col px-20'>
        <div className='w-full h-64 flex items-center text-Primary space-x-7'>
            <h1 className=' text-4xl font-light'>
                AJOUTER UN PRODUITS
            </h1>
      </div>
      <div className='w-full h-[28rem] flex flex-col'>
        <div className='w-full flex space-x-10'>
            <div className='flex flex-col w-1/2'>
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-Txt text-lg  italic mb-2">
                        NOM DU PRODUIT
                    </label>
                    <input required value={name} onChange={(e) => setName(e.target.value)} className="appearance-none block w-full font-light text-gray-700 rounded-md py-1.5 px-2 mb-3 leading-tight outline-none border border-gray-300 focus:border-gray-400" type="text" placeholder="Nom"/>
                </div>
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-Txt text-lg  italic mb-2">
                        TYPE
                    </label>
                    <select required className="block appearance-none w-full border border-gray-300 px-2 text-Txt py-1.5 rounded-md bg-white outline-none">
                        <option>- selectionnez un type de produit -</option>
                        <option>Type 1</option>
                        <option>Type 2</option>
                        <option>Type 3</option>
                    </select>
                </div>
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-Txt text-lg  italic mb-2">
                        REFERENCE
                    </label>
                    <input required value={ref} onChange={(e) => setRef(e.target.value)} className="appearance-none block w-full font-light text-gray-700 rounded-md py-1.5 px-2 mb-3 leading-tight outline-none border border-gray-300 focus:border-gray-400" type="text" placeholder="reference"/>
                </div>
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-Txt text-lg  italic mb-2">
                        PRIX
                    </label>
                    <input required value={price} onChange={(e) => setPrice(e.target.value)} className="appearance-none block w-full font-light text-gray-700 rounded-md py-1.5 px-2 leading-tight outline-none border border-gray-300 focus:border-gray-400" type="text" placeholder="prix"/>
                </div>
            </div>

            <div className='flex flex-col w-1/2'>
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-Txt text-lg  italic mb-2">
                        DESCRIPTION
                    </label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="appearance-none block w-full font-light h-[11.8rem] text-gray-700 rounded-md py-1.5 px-2 mb-3 leading-tight outline-none border border-gray-300 focus:border-gray-400 resize-none" placeholder="description"/>
                </div>
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-Txt text-lg  italic mb-2">
                        IMAGE
                    </label>
                    <input onChange={(e) => handleSelectedImage(e)} className="appearance-none block w-full font-light bg-white text-base text-Txt rounded-md py-1 px-2 leading-tight outline-none border border-gray-300 focus:border-gray-400" type="file"/>
                </div>
            </div>

        </div>
        <button type='button' onClick={() => handleSave} 
            className="px-2 py-1 bg-Primary rounded mx-auto text-white text-sm mt-16 font-light"
        >
            ENREGISTRER
        </button>
      </div>
    </div>
  )
}

export default AddProduct