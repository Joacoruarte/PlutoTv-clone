import { FaCircle } from 'react-icons/fa'
import Header from '../components/Header'

function onDemand() {
  return (
    <div>
      <Header />
      <div className="container-slide">
        <div className="slide-description ml-2 flex flex-col">
          <h1 className="text-2xl font-bold text-white">Los Tres Chiflados</h1>
          <span className="mt-2 text-white">Clasicos</span>
          <p className="description">
            El particular estilo de comedia de Curley, Moe y Larry divierte de
            principio a fin.
          </p>
          <button className="mt-2 h-8 w-20 rounded-lg bg-[#FFDE2B] p-2 font-semibold leading-4 text-black">
            Detalles
          </button>
          <div className="m-3 flex w-[100%] items-center justify-center gap-4" style={{height: "inherit"}}>
            <button>
              <FaCircle />
            </button>
            <button>
              <FaCircle />
            </button>
            <button>
              <FaCircle />
            </button>
          </div>
        </div>
        <div className="imgs flex">
          <img src="/3chiflados.jpg" className="slide-img z-40 " />
          <img src="/love.jpg" className="slide-img z-30" />
          <img src="/sonic.jpg" className="slide-img z-20 " />
        </div>
      </div>
    </div>
  )
}

export default onDemand
