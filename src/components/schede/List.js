import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api_url } from "../../config"

const List = () => {
    const navigate = useNavigate()
    const [rows, setRows] = useState([])

    useEffect( () => {
        fetch(`${api_url}/schede`)
        .then(result => result.json())
        .then(result => setRows(result))
    }, [])

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
                        </tr>
                        )
                    )
                }
                
            </tbody>
        </table>
    </div>
}

export default List