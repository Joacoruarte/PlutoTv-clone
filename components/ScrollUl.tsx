import React, {useEffect} from 'react'
import { CgBoy } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { FaHandsWash, FaLaughSquint } from 'react-icons/fa'
import { GiAmericanFootballPlayer, GiCoffeeCup, GiTrophyCup} from 'react-icons/gi'
import { RiMovie2Line, RiCriminalFill } from 'react-icons/ri'
import { setSelectLi } from '../redux/actions'
import { useRouter } from 'next/router'

type LI = {
    li: string
}

function ScrollUl() {

  const dispatch = useDispatch()
  const li = useSelector((state: LI) => state.li)
  const hanldeLi = (value: string) => {
    dispatch(setSelectLi(value))
    router.push(`#${value}`)
  }
  const router = useRouter()
  useEffect(() => {}, [dispatch, li])
  return (
    <div className="scrollUl">
      <ul className="flex flex-col gap-2">
        <li
          onClick={() => hanldeLi('Destacado')}
          className={`${li === 'Destacado' ? 'scrollSelect' : 'scroll-li'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="line h-6 w-6 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p>Destacado</p>
        </li>
        <li
          onClick={() => hanldeLi('PlutoTV')}
          className={`${li === 'PlutoTV' ? 'scrollSelect' : 'scroll-li'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="line mr-0.5 h-6 w-6 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <p className="button-svg">Pluto TV</p>
        </li>
        <li
          onClick={() => hanldeLi('Peliculas')}
          className={`${li === 'Peliculas' ? 'scrollSelect' : 'scroll-li'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="line h-6 w-6 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
          <RiMovie2Line className="ml-0.5" />
          <p className="button-svg">Peliculas</p>
        </li>
        <li
          onClick={() => hanldeLi('Paramount+Presenta')}
          className={`${
            li === 'Paramount+Presenta' ? 'scrollSelect' : 'scroll-li'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="line h-6 w-6 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-[-0.3rem] h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p>Paramount + Presenta</p>
        </li>
        <li
          onClick={() => hanldeLi('Entretenimiento')}
          className={`${
            li === 'Entretenimiento' ? 'scrollSelect' : 'scroll-li'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="line h-6 w-6 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
          <FaHandsWash className="ml-0.5" />
          <p>Entretenimiento</p>
        </li>
        <li
          onClick={() => hanldeLi('Noticias')}
          className={`${li === 'Noticias' ? 'scrollSelect' : 'scroll-li'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="line h-6 w-6 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-[-0.3rem] h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
              clipRule="evenodd"
            />
          </svg>
          <p>Noticias</p>
        </li>
        <li
          onClick={() => hanldeLi('Curiosidad')}
          className={`${li === 'Curiosidad' ? 'scrollSelect' : 'scroll-li'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="line h-6 w-6 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-[-0.3rem] h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          <p>Curiosidad</p>
        </li>
        <li
          onClick={() => hanldeLi('Investigacion')}
          className={`${li === 'Investigacion' ? 'scrollSelect' : 'scroll-li'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="line h-6 w-6 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
          <RiCriminalFill className="ml-0.5" />
          <p className="button-svg">Investigacion</p>
        </li>
        <li
          onClick={() => hanldeLi('Anime&Gaming')}
          className={`${li === 'Anime&Gaming' ? 'scrollSelect' : 'scroll-li'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="line h-6 w-6 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
          <GiAmericanFootballPlayer className="ml-0.5" />
          <p className="button-svg">Anime & Gaming</p>
        </li>
        <li
          onClick={() => hanldeLi('Deportes')}
          className={`${li === 'Deportes' ? 'scrollSelect' : 'scroll-li'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="line h-6 w-6 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
          <GiTrophyCup className="ml-0.5" />
          <p>Deportes</p>
        </li>
        <li
          onClick={() => hanldeLi('Comedia')}
          className={`${li === 'Comedia' ? 'scrollSelect' : 'scroll-li'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="line h-6 w-6 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
          <FaLaughSquint className="ml-0.5" />
          <p className="button-svg">Comedia</p>
        </li>
        <li
          onClick={() => hanldeLi('Estilodevida')}
          className={`${li === 'Estilodevida' ? 'scrollSelect' : 'scroll-li'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="line h-6 w-6 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
          <GiCoffeeCup className="ml-0.5" />
          <p className="button-svg">Estilo de vida</p>
        </li>
        <li
          onClick={() => hanldeLi('Kids')}
          className={`${li === 'Kids' ? 'scrollSelect' : 'scroll-li'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="line h-6 w-6 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
          <CgBoy className="ml-0.5" />
          <p className="button-svg">Kids</p>
        </li>
        <li
          onClick={() => hanldeLi('Musica')}
          className={`${li === 'Musica' ? 'scrollSelect' : 'scroll-li'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="line h-6 w-6 rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
          </svg>
          <p>Musica</p>
        </li>
      </ul>
    </div>
  )
}

export default ScrollUl
