import { useEffect, useState } from "react"

function Homepage() {
    const [dogpic, setDogPic] = useState()

    useEffect(getDogPic, [])

    function getDogPic() {

    fetch('https://foodish-api.com/api/')
        .then(function(response) {
            return response.json() 
        }).then(function(data) {
            setDogPic(data.image)
        })
    }

    return(
        <>
        <h1>Dogpic</h1>
        <img src={dogpic} />
        </>
    )
}

export default Homepage