import React, {useState }from 'react'
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

export default function HogCard({name, image, specialty, greased, weight, medal, greaseFilter, setGreaseFilter}) {

    const imageMapper = {
        augustus_gloop : augustus_gloop,
        babe : babe,
        bailey : bailey,
        cherub : cherub,
        galaxy_note : galaxy_note,
        leggo_my_eggo : leggo_my_eggo,
        peppa : peppa,
        piggy_smalls : piggy_smalls,
        piglet : piglet,
        porkchop : porkchop,
        trouble : trouble,
        truffle_shuffle : truffle_shuffle,     
}

    const [hidden, setHidden] = useState(false)
    const [hideHog, setHideHog] = useState(false)
    function showDetails() {
        setHidden(!hidden)
    }

    return (
        <>
        <br></br>
         <div onClick={showDetails} style={{display: greaseFilter && !greased? "none" : "block"}} style={{display: hideHog ? "none" : "block"}}>
            <p>{name}</p>
            <img src={imageMapper[image]} />
            <div className="details" style={{display: hidden? "none": "block"}}>
                <p>Specialty: {specialty}</p>
                <p>Greased: {greased.toString()}</p>
                <p>Weight: {weight}</p>
                <p>Highest Medal Achieved: {medal}</p>
                
            </div>
            
         </div>
         <p style={{display: hideHog ? "block" : "none"}}>{name}</p>
         <button onClick={() => setHideHog(!hideHog)} > {hideHog ? "Show" : "Hide"} Hog</button>
         <br></br>
         </>
    )
}
