import {useParams} from 'react-router-dom'

const Details = () => {
    let {id} = useParams()

    // carica i contenuti della scheda numero id

    return <div className="schede__details">
        <h1>Dettagli scheda {id}</h1>

        <div>
            Contenuto della scheda
        </div>
    </div>
}

export default Details