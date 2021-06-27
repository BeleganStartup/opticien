import {useState, useEffect} from 'react'
import axios from 'axios'


const index = () => {

    const [token, setToken] = useState(null)
    const [refresh, setRefresh] = useState(null)

    let getToken = () => {
        const getTokenUrl = 'http://127.0.0.1:8000/api/token/'
        const data = {
            username: 'admin',
            password: 'admin'
        }
        const headers = {
            'Content-Type': 'application/json',
        }
        // Update the document title using the browser API
        axios.post(getTokenUrl, data, {headers: headers})
        .then((response) => {
            setToken(response.data.access)
            setRefresh(response.data.refresh)
        }, (error) => {
            console.log(error.response)
        })
    }

    useEffect(() => {
        getToken()
    }, [])

    return (
        <div>
            token: {token ? token : "Loading..."}
            <hr />
            refresh: {refresh ? refresh : "Loading..."}
        </div>
    )
}

export default index
