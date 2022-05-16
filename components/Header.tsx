import React, { useEffect } from 'react'
import { MenuIcon } from '@heroicons/react/solid'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { handleShowSideBar, setUrl } from '../redux/actions'
import { useRouter } from 'next/router'
import { useParams } from 'react-router-dom'
type sideBar = {
  sideBar: boolean
}
type url = {
  url: string
}

function Header() {
  const sidebar = useSelector((state: sideBar) => state.sideBar)
  const url = useSelector((state: url) => state.url)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      dispatch(setUrl(url))
    }
    router.events.on('routeChangeStart', handleRouteChange)
  }, [dispatch])

  return (
    <header className="Navbar flex bg-black">
      {sidebar && <Sidebar />}
      <div className="headerDiv flex gap-2 space-x-2">
        <MenuIcon
          onClick={() => dispatch(handleShowSideBar(!sidebar))}
          className="h-8 w-8 cursor-pointer rounded-full py-2 px-2 text-[rgb(168,168,168)] transition hover:bg-[rgb(31,31,31)] hover:text-gray-200"
        />
        <img
          onClick={() => router.push('/')}
          src="/plutotv.png"
          className="plutoWH cursor-pointer"
        />
      </div>

      <div className="flex w-[70%] items-center  justify-center text-center">
        <button
          onClick={() => router.push('/')}
          className={`${
            url === '/'
              ? 'buttonHeader buttonOn flex gap-2 rounded-full font-semibold  transition hover:bg-[#2C2C2C]'
              : 'buttonDemand flex gap-2 rounded-full font-semibold text-white  transition hover:bg-[#2C2C2C]'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
              clipRule="evenodd"
            />
          </svg>
          <p className="tv">TV en vivo</p>
        </button>
        <button
          onClick={() => router.push('/onDemand')}
          className={`${
            url === '/onDemand'
              ? 'buttonOn ml-2 flex gap-2 rounded-full font-semibold text-white hover:bg-[#2C2C2C]'
              : 'buttonDemand ml-2 flex gap-2 rounded-full font-semibold text-white hover:bg-[#2C2C2C]'
          }`}
        >
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>{' '}
          <p className="tv">On demand</p>
        </button>
        <button
          onClick={() => router.push('/search')}
          className={`${
            url === '/search'
              ? 'buttonOn ml-2 flex gap-2 rounded-full font-semibold text-white hover:bg-[#2C2C2C]'
              : 'buttonDemand ml-2 flex gap-2 rounded-full font-semibold text-white hover:bg-[#2C2C2C]'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <p className="tv">Buscar</p>
        </button>
      </div>
    </header>
  )
}

export default Header
