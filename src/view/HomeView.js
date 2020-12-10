import React, {useEffect, useState  }from 'react'
import PokemonService from '../shared/api/service/PokemonService'




export const HomeView = () => {



    useEffect(() => {
        alert("Home component is being rendered")
        return () => {
            alert("component is being removed")
        }
    }, [])

    const [data, setData] = useState()
    const [search, setSearch] = useState("")

    const fetchDataFromExternalApi = () => {

        PokemonService.searchForPokemon(search.toLowerCase())
        .then((response) => setData(response.data))
        .catch((error)=> console.log(error))
    }

    const displayData = () => {
        if(data) {
            return <div>
                <h3> Name:  {data.name} </h3>
                <h3> Id:  {data.id} </h3>
                <h3> Weight:  {data.weight} </h3>
                <h3> Height:  {data.height} </h3>
                <h3> Type:  {data.types[0].type.name} </h3>
            </div>
        }
    }
    return(
    <div>
        <br/>
        <h1>this is my home view</h1>
        <br/>
        <span>Search for Pokenmon: </span>
        <input onChange={(event) => setSearch(event.target.value)}/>
        <br/>
        <button onClick={()=> fetchDataFromExternalApi()}>Make APi call</button>
        {displayData()}
        <button onClick={()=> console.log(data)}>Show state</button>
        
    </div>
    )
}
