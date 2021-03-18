import React from 'react'
import HogCard from './HogCard'
import hogs from '../porkers_data.js'

export default function MainContainer({greaseFilter, setGreaseFilter}) {
    
    return (
            hogs.map((hog) => {
                return (
                    <HogCard name={hog.name} image={hog.name.toLowerCase().replace(" ", "_")}
                    specialty={hog.specialty} 
                    greased={hog.greased} 
                    weight={hog.weight} 
                    medal={hog["highest medal achieved"]}
                    greaseFilter={greaseFilter}
                    setGreaseFilter={setGreaseFilter}
                    />
                )


        })
    )

}




// sort( (a, b) => {a.name < b.name ?  -1 : 1 })