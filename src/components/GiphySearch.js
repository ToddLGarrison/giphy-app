import React, { useState } from "react";

const GiphySearch = () => {
    const [query, setQuery] = useState('')
    const [gifs, setGifs] = useState([])
    
    const giphyApiKey = process.env.GIPHY_API_KEY

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyApiKey}`)
            const giphyData = await response.json()

            console.log(giphyData)
            setGifs(giphyData.data)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="Search for Gifs"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <div>
                {gifs.map((gif) => (
                    <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
                ))}
            </div>
        </div>
    )
}

export default GiphySearch