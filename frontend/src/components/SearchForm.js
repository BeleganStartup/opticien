// React
import {useState, useEffect} from 'react'
// Axios
import axios from 'axios'
// React Bootstrap
import Form from 'react-bootstrap/Form'
import {FaSearchengin} from 'react-icons/fa'

// The previous token is retained here
let cancelToken

const getData = (searchTerm, setContents) => {
    // Check if there are any previous pending requests
    if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.")
    }
    //Save the cancel token for the current request
    cancelToken = axios.CancelToken.source()

    // Make a request for a user with a given ID
    if (searchTerm) {
        axios.get(`http://127.0.0.1:8000/api/v1/patients/search/${searchTerm}/`, { cancelToken: cancelToken.token })
        .then(function (response) {
            // handle success
            setContents(response.data.detail)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    } else { // If there is no search term, get all Patients
        axios.get(`http://127.0.0.1:8000/api/v1/patients/getPatients/`, { cancelToken: cancelToken.token })
        .then(function (response) {
            // handle success
            setContents(response.data.detail)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
}

const SearchForm = ({setContents}) => {
    // Get Search
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value);
      };
    // Apply Search
    useEffect(() => {
        const cleanSearchTerm = searchTerm.trim()
            getData(cleanSearchTerm, setContents)
      }, [searchTerm])


    return (
        <div className="my-2">
            <h5><FaSearchengin/> Filtration:</h5>
            <Form.Control value={searchTerm} onChange={handleChange} id="inlineFormInputName" placeholder="La recherche va ici" />
            <small className="text-muted">Rechercher en utilisant uniquement le prénom ou uniquement le nom de famille</small>
        </div>
    )
}

export default SearchForm
