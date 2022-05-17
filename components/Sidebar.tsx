import { XIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleShowSideBar } from '../redux/actions'

interface Props {
  sideBar: boolean
}

function Sidebar() {
  const dispatch = useDispatch()
  const sidebar = useSelector((state: Props) => state.sideBar)
  const router = useRouter()
  useEffect(() => {}, [dispatch, sidebar])

  return (
    <div
      className={`${
        sidebar
          ? 'absolute top-0 left-0 !z-60 h-screen w-screen bg-[rgba(0,0,0,0.5)]'
          : 'absolute top-0 left-0 hidden h-screen w-80'
      }`}
    >
      <div className="width-Sidebar h-screen w-80 bg-[rgb(21,21,21)]">
        <div className="headerDiv flex gap-3">
          <button onClick={() => dispatch(handleShowSideBar(!sidebar))}>
            <XIcon className="h-8 w-8 cursor-pointer rounded-full py-2 px-2 text-[rgb(168,168,168)] transition hover:bg-[rgb(31,31,31)] hover:text-gray-200" />
          </button>
          <img src="/plutotv2.png" alt="plutoTv" className="plutoWH" />
        </div>
        <div className="mt-2 flex flex-col gap-2 px-5 text-white">
          <h2 className="titleSide">VER AHORA</h2>
          <ul className="ul-Side">
            <li
              onClick={() => {
                dispatch(handleShowSideBar(!sidebar))
                router.push('/')
              }}
              className="sideBar-li flex gap-1 space-x-4"
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
                  d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                  clipRule="evenodd"
                />
              </svg>
              TV en vivo
            </li>
            <li
              onClick={() => {
                dispatch(handleShowSideBar(!sidebar))
                router.push('/onDemand')
              }}
              className="sideBar-li flex gap-1"
            >
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
              </svg>
              On Demand
            </li>
          </ul>
          <h2 className="titleSide">ACERCA DE PLUTO TV</h2>
          <ul>
            <li className="sideBar-li">Soporte</li>
          </ul>
          <h2 className="titleSide">LEGALES</h2>
          <ul>
            <li className="sideBar-li">Terminales de uso</li>
            <li className="sideBar-li">Politica de privacidad</li>
            <li className="sideBar-li">Politca de cookies</li>
            <li className="sideBar-li">
              No comercializar mis datos personales
            </li>
          </ul>
          <span className="ml-4 text-xs text-[rgb(98,98,98)]">
            &copy;2022 Pluto Inc. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
