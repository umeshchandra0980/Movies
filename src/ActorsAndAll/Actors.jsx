import React, { useEffect } from 'react'
import { API_KEY } from '../Constance/Constance'
import { Aperture } from 'lucide-react'

export default function Actors() {

    useEffect(() => {
        const fun = async() => {
            // const responce  = await fetch(`https://api.themoviedb.org/3/movie/244808/credits?api_key=${API_KEY}`)
            const responce = await fetch(`https://api.themoviedb.org/3/movie/${1100988}?api_key=4910708f3cdd44608a521cfd40be3cbd`)
            const data = await responce.json()
            console.log(data)
        }
        fun()
    },[])
  return (
    <div>
       hi
    </div>
  )
}
