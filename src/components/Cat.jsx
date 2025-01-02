import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function Cat () {
  const { slug } = useParams();
  const [cat, setCat] = useState([])
  function fetchCat () {
    let api = 'https://dummyjson.com/products/categories';
    

    axios
      .get(api)
      .then(response => {
        setCat(response.data)
      })
      .catch(error => {
        alert('Api error')
      })
  }
  useEffect(fetchCat, [])
  return (
    <>
      <div>
        <ul>
          <li className='p-2 bg-slate-400 rounded-sm mb-2 border-[1px]'>
            Category
          </li>
          {cat.map(item => {
            return (
              <Link to={`/${item.slug}`}>
                <li
                  className={
                    `p-2  rounded-sm mb-2 border-[1px] ${item.slug == slug ? "bg-blue-400 " : null} hover:bg-slate-300`
                  }
                  key={item.slug}
                >
                  {item.name}
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </>
  )
}
