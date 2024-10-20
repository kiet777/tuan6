import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ProductDetail({handleAddToCart}) {
  const location = useLocation()
  const {product} = location.state || {}
  
  return (
    <section className='p-6 max-w-3xl mx-auto border border-gray-400 rounded-lg shadow-lg bg-white mt-10'>
      <h2 className='text-3xl font-bold text-gray-800 text-center'>{product.productName}</h2>
      <div className='flex gap-10 mt-5'>
          <img src={product.productImg} alt={product.productName} className='w-80 h-80 object-cover shadow-md py-5'/>
          <div className=''>
            <p className='text-xl font-semibold text-red-500'>Giá: {product.price.toLocaleString()} VNĐ</p>
            <p className='text-lg text-gray-600 mt-2'>Mô tả sản phẩm: {product.description}</p>
            <div className='text-end mt-20'>
              <button onClick={() => { handleAddToCart(product) }} className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300'>Thêm vào giỏ hàng</button>
            </div>
          </div>
      </div>
      </section>
  )
}
