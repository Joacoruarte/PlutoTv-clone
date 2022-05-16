import { XIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import Header from '../components/Header'

function search() {
  const [movie, setMovie] = useState<string>("")  
  const deleteValue = () => {
      setMovie("")
  }
  return (
    <div className="h-screen bg-black text-white">
      <Header />
      <div className="mt-7 flex w-[100%] items-center justify-center text-xl font-semibold">
          <input
            onChange={(e) => setMovie(e.target.value)}
            value={movie}
            type="text"
            placeholder="Buscar películas, canales y más."
            className="inputSearch w-[90%] bg-black outline-none"
          />
          {movie !== "" && <XIcon onClick={deleteValue} className="relative cursor-pointer top-0.5 right-8 h-5 w-5 text-white" />}
      </div>

      <div>
        <h2 className="flex h-[50vh]  items-center justify-center text-center text-[#A8A8A8]">
          Por favor usa el campo de Búsqueda para comenzar la búsqueda
        </h2>
      </div>
    </div>
  )
}

export default search
