import { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { api_url } from '../../config'
import { qualityValues } from '../../constants'

const Details = () => {
    let {id} = useParams()
    const navigate = useNavigate()

    const [state, setState] = useState({})

    useEffect(() => {
        fetch(`${api_url}/schede/${id}`)
            .then(result => result.json())
            .then(result => setState(result))
            .catch(error => {
                alert('Errore nella chiamata')
                navigate('/schede')
            })
    }, [id])

    const handleInputChange = (e, fieldName) => {
        setState({
            ...state,
            ...{
                [fieldName]: e.target.value
            }
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
                        <input type="lunghezza" className="form-control" id="lunghezza" value={state.lunghezza}
                        onChange={e => handleInputChange(e, 'lunghezza')}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                        <option>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                    </form>

            </div>
        </div>
    </div>
}

export default Details