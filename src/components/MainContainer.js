import React from 'react'
import HogCard from './HogCard'
import hogs from '../porkers_data.js'

export default function MainContainer({greaseFilter, setGreaseFilter, sorted, sortedWeight}) {
    console.log(sorted)
    console.log(sortedWeight)
    
    
    if (sorted || sortedWeight) {
        if(sorted) {
            let sortedHogs = hogs.sort((a, b) => (a.name > b.name) ? 1: -1)
            return (
                sortedHogs.map((hog) => {
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
        } else if(sortedWeight) {
            let sortedHogsWeight = hogs.sort((a,b) => {return a.weight - b.weight})
            return (
                sortedHogsWeight.map((hog) => {
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
    }
            else {
                console.log(hogs)
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




   
}

