import { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { api_url } from '../../config'
import { qualityValues } from '../../constants'

const Details = () => {
    let {id} = useParams()
    const navigate = useNavigate()

    const [state, setState] = useState({})

    useEffect(() => {
        if(id !== 'new') {
            fetch(`${api_url}/schede/${id}`)
                .then(result => result.json())
                .then(result => setState(result))
                .catch(error => {
                    alert('Errore nella chiamata')
                    navigate('/schede')
                })
        } else {
            console.log('è una nuova scheda')
        }
    }, [id])

    const handleInputChange = (e, fieldName) => {
        setState({
            ...state,
            ...{
                [fieldName]: e.target.type === "number" 
                    ? parseInt(e.target.value, 10)
                    : e.target.value
            }
        })
    }

    const handleDelete = () => {
        fetch(
            `${api_url}/schede/${id}`,
            {
                method: 'DELETE',
            }
        )
        .then(() => {
            alert('Scheda eliminata')
            navigate('/schede')
        })
        .catch(e => {
            alert('Errore eliminazione scheda')
            console.error(e)
        })
    }

    const saveForm = () => {
        console.log('State', state)
        fetch(
            `${api_url}/schede${id === 'new' ? '': `/${id}`}`,
            {
                method: id === 'new' 
                    ? 'POST'
                    : 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
            }
        )
        .then(() => {
            navigate('/schede')
        })
        .catch(e => {
            alert('Errore salvataggio')
            console.error(e)
        })
    }

    return <div className="schede__details text-start">
        <h1>Dettagli scheda {id}</h1>

        <div className="row">
            <div className='col-md-6'>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td><b>ID</b></td>
                            <td>{state.id}</td>
                        </tr>
                        <tr>
                            <td><b>ODV</b></td>
                            <td>{state.odv}</td>
                        </tr>
                        <tr>
                            <td><b>ODP</b></td>
                            <td>{state.odp}</td>
                        </tr>
                        <tr>
                            <td><b>Colata</b></td>
                            <td>{state.colata}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='col-md-6'>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td><b>Set lavorazione</b></td>
                            <td>{state.set_lavorazione}</td>
                        </tr>
                        <tr>
                            <td><b>Qualità</b></td>
                            <td>{state.qualita}</td>
                        </tr>
                        <tr>
                            <td><b>Tipo prodotto</b></td>
                            <td>{state.tipo_prodotto}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* riga con la form */}
        <div className="row">
            <div className="col">

                <form className="row g-3">
                    <div className='col-md-6'>
                        <label htmlFor='quality' className='form-label'>Qualità {state.qualita}</label>
                        <select 
                            id='quality' 
                            className='form-select'
                            value={state.qualita}
                            onChange={e => handleInputChange(e, 'qualita')}
                        >
                            <option>Seleziona...</option>
                            {Object.keys(qualityValues).map( q => <option key={q} value={q}>{qualityValues[q]}</option>)}
                        </select>
                    </div>


                    <div className="col-md-6">
                        <label htmlFor="lunghezza" className="form-label">Lunghezza {state.lunghezza}</label>
                        <input type="number" className="form-control" id="lunghezza" value={state.lunghezza}
                        onChange={e => handleInputChange(e, 'lunghezza')}
                        />
                    </div>
                    
                    <div className="col-12">
                        {
                            id !== 'new' &&
                            <button
                                type="button"
                                className="btn btn-danger me-5"
                                onClick={handleDelete}
                            >Elimina</button>
                        }
                  

                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={saveForm}
                        >Salva</button>
                    </div>
                    </form>

            </div>
        </div>
    </div>
}

export default Details