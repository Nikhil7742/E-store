import { Link } from 'react-router-dom'
export default function Header () {
  return (
    <>
      <div className='w-full py-2 shadow-md'>
        <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
          <div className='text-[30px] font-bold'>E-store</div>

          <ul className='flex gap-[40px] text-[22px] sm:me-1 me-5   '>
            <li>
              <Link to='/'>Store</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
