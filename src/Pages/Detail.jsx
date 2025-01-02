import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Detail () {
  const [detail, setDetail] = useState(null)
  const { id } = useParams() // id is used from useParams()

  function fetchDetail () {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(response => {
        setDetail(response.data)
      })
      .catch(error => {
        alert('Detail API error')
      })
  }
  useEffect(fetchDetail), [id]

  if (!detail) {
    return (
      <div className='flex items-center justify-center h-[70vh]'>
        <div className='animate-spin rounded-full h-[150px] w-[150px] border-t-[10px] border-blue-500'></div>
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className='p-8 bg-gray-50'>
        <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-md '>
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='flex-shrink-0 p-1'>
              <img
                src={detail.images[0]}
                alt={detail.title}
                className=' max-w-sm rounded-lg shadow h-[400px]'
              />
            </div>
            <div className='flex-1 p-2'>
              <h1 className='text-2xl font-bold mb-2'>{detail.title}</h1>
              <p className='text-gray-600 mb-4'>{detail.description}</p>
              <div className='flex items-center gap-4 mb-4'>
                <p className='text-lg font-semibold text-green-600'>
                  ${detail.price.toFixed(2)}
                </p>
                <p className='text-sm text-gray-500 line-through'>
                  $
                  {(
                    (detail.price * 100) /
                    (100 - detail.discountPercentage)
                  ).toFixed(2)}
                </p>
                <span className='text-xs bg-yellow-200 text-yellow-800 py-1 px-2 rounded'>
                  {detail.discountPercentage}% OFF
                </span>
              </div>
              <p className='text-sm mb-2'>
                <span className='font-semibold'>Brand:</span> {detail.brand}
              </p>
              <p className='text-sm mb-2'>
                <span className='font-semibold'>Stock:</span> {detail.stock} (
                {detail.availabilityStatus})
              </p>
              <p className='text-sm mb-2'>
                <span className='font-semibold'>Category:</span>{' '}
                {detail.category}
              </p>
              <p className='text-sm mb-2'>
                <span className='font-semibold'>SKU:</span> {detail.sku}
              </p>
              <p className='text-sm mb-4'>
                <span className='font-semibold'>Dimensions:</span>{' '}
                {`${detail.dimensions.width} x ${detail.dimensions.height} x ${detail.dimensions.depth}`}
              </p>
              <button className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}



