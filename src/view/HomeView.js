import React, {useEffect, useState  }from 'react'
import PokemonService from '../shared/api/service/PokemonService'
import './home.css'

export const HomeView = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        alert("Home component is being rendered")
        return () => {
            alert("component is being removed")
        }
    }, [count])

    const [data, setData] = useState()
    const [search, setSearch] = useState("")

    const fetchDataFromExternalApi = () => {

        PokemonService.searchForPokemon(search.toLowerCase())
        .then((response) => setData(response.data))
        .catch((error)=> console.log(error))
    }

    const displayData = () => {
        if(data) {
            return <div className="character">
                <h3> Name:  {data.name} </h3>
                <h3> Id:  {data.id} </h3>
                <h3> Weight:  {data.weight} lb</h3>
                <h3> Height:  {data.height} lb</h3>
                <h3> Type:  {data.types[0].type.name} </h3>
                <h3> abilities: {data?.moves?.length} total moves</h3>
            </div>
        }
    }
    return(
    <div className="homepage">
        <br/>
        <h1>Welcome to Home View</h1>
        <h2>{count}</h2>
        <button onClick={()=> setCount(count + 1)}>Increment with 1</button>
        <br/>
        <hr />
        <span>Search for Pokenmon: </span>
        
        <input onChange={(event) => setSearch(event.target.value)}/>
        <br/>
        <br/>
        <button onClick={()=> fetchDataFromExternalApi()}>Make APi call</button> <br/>
        <img src={data?.sprites?.front_default} alt={''} />
        {displayData()}
        <button onClick={()=> console.log(data)}>Show state</button>
        
    </div>
    )
}
