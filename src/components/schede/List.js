import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api_url } from "../../config"

const List = () => {
    const navigate = useNavigate()
    const [rows, setRows] = useState([])

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
                            <td><i 
                            onClick={e => handleRowDelete(row.id, e)} 
                            className="bi bi-trash" /></td>
                        </tr>
                        )
                    )
                }
                
            </tbody>
        </table>
    </div>
}

export default List