import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api_url } from "../../config"

const List = () => {
    const navigate = useNavigate()
    const [rows, setRows] = useState([])
    const [modalId, setModalId] = useState(null)
    const [notesText, setNotesText] = useState('')

    const loadSchede = () => {
        fetch(`${api_url}/schede`)
        .then(result => result.json())
        .then(result => setRows(result))
    }

    useEffect( () => {
        loadSchede()
    }, [])

    const handleRowDelete = (id, e) => {
        e.stopPropagation()
        // eslint-disable-next-line no-restricted-globals
        if(confirm(`Vuoi davvero eliminare la scheda ${id}?`)) {
            fetch(
                `${api_url}/schede/${id}`,
                {
                    method: 'DELETE',
                }
            )
            .then(() => {
                alert('Scheda eliminata')
                loadSchede()
            })
            .catch(e => {
                alert('Errore eliminazione scheda')
                console.error(e)
            })
        }
    }

    const handleOpenModal = (e, rowId, rowNota) => {
        console.log('openmodal', rowId, rowNota)

        e.stopPropagation()
        setModalId(rowId)

        fetch(
            `${api_url}/schede/${rowId}`
        )
        .then( d => d.json())
        .then( d => {
            setNotesText(d.note)
        })
        .catch(e => console.error(e))
    }

    const handleCloseModal = () => {
        setModalId(null)
        setNotesText('')
    }

    const handleSaveNote = () => {
        fetch(
            `${api_url}/schede/${modalId}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    note: notesText
                })
            }
        )
        .then(() => {
            alert('Nota salvata')
            setNotesText('')
            setModalId(null)
        })
        .catch(e => {
            alert('Errore salvataggio')
            console.error(e)
        })
    }

    return <div className="schede__list">
        <h1>Elenco schede</h1>

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>odp</th>
                    <th>colata</th>
                    <th>odv</th>
                    <th>set lavorazione</th>
                    <th>qualità</th>
                    <th>tipo prodotto</th>
                    <th>azioni</th>
                </tr>
            </thead>

            <tbody>
                {
                    rows.map(row => (
                    <tr 
                        key={row.id}
                        onClick={() => navigate(`/schede/${row.id}`)}
                    >
                            <td>{row.id}</td>
                            <td>{row.odp}</td>
                            <td>{row.colata}</td>
                            <td>{row.odv}</td>
                            <td>{row.set_lavorazione}</td>
                            <td>{row.qualita}</td>
                            <td>{row.tipo_prodotto}</td>
                            <td>
                                <i 
                            onClick={e => handleRowDelete(row.id, e)} 
                            className="bi bi-trash" />
                                <i 
                                    onClick={e => handleOpenModal(e, row.id, row.note)}
                                    class="bi bi-file-earmark-text"
                                ></i>
                            </td>
                        </tr>
                        )
                    )
                }
                
            </tbody>
        </table>


        <div 
            className={`modal ${modalId ? 'show fade' : '' }`}
            tabindex="-1" role="dialog"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Aggiunta note Scheda {modalId}</h5>
                    <button 
                        type="button" className="close" data-dismiss="modal" aria-label="Close"
                        onClick={handleCloseModal}
                    >
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <textarea 
                        className="form-control"
                        value={notesText}
                        onChange={e => setNotesText(e.target.value)}
                    />
                </div>
                <div className="modal-footer">
                    <button 
                        type="button" className="btn btn-primary"
                        onClick={handleSaveNote}
                    >Salva</button>
                    <button 
                        type="button" className="btn btn-secondary" data-dismiss="modal"
                        onClick={handleCloseModal}
                    >Annulla</button>
                </div>
                </div>
            </div>
            </div>
    </div>
}

export default List