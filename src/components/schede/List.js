import { useNavigate } from "react-router-dom"

const List = () => {
    const navigate = useNavigate()

    // carica i contenuti da visualizzare nella tabella

    return <div className="schede__list">
        <h1>Elenco schede</h1>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
            </thead>

            <tbody>
                <tr
                    onClick={() => navigate("/schede/0")}
                >
                    <td>0</td>
                    <td>Pinco</td>
                </tr>
                <tr
                    onClick={() => navigate("/schede/1")}
                >
                    <td>1</td>
                    <td>Pallino</td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default List