import {
  destacados,
  comedia,
  music,
  kids,
  estiloDeVida,
  entretenimiento,
  paramount,
  deportes,
  investigación,
  animeGaming,
  plutotv,
  curiosidad,
  peliculas,
  noticias,
} from '../tvEnVivo'
import ScrollBody from './ScrollBody'
import ScrollUl from './ScrollUl'

function Scroll() {
  return (
    <div className="scrollContainer">
      <ScrollUl />
      <ScrollBody
        destacados={destacados}
        comedia={comedia}
        music={music}
        kids={kids}
        estiloDeVida={estiloDeVida}
        entretenimiento={entretenimiento}
        paramount={paramount}
        deportes={deportes}
        investigación={investigación}
        animeGaming={animeGaming}
        plutotv={plutotv}
        curiosidad={curiosidad}
        peliculas={peliculas}
        noticias={noticias}
      />
    </div>
  )
}

export default Scroll
