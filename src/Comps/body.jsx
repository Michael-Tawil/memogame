import { useState,useEffect } from "react";
import Card from './Card'
import Header from "./Header";

function Body(props){

    const [score,Setscore] = useState(0);
    const [cardimg,Setcardimg] = useState("");
    const [cardtext,Setcardtext] = useState("");
    const [spoki,Setspoki] = useState([]);

    useEffect(()=> {
        async function GetPoki() {
            let pokiarray =[]

            for (let i = 1; i <= 10; i++){
            let fetchpoki = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            let pokedata = await fetchpoki.json();
            let pname = pokedata.name
            let pimg = pokedata.sprites.front_default
            pokiarray.push([pname,pimg])
        
            }

            Setspoki(pokiarray)
            
        }
        GetPoki();
    },[])


    console.log(spoki);
    function CalcScore(){

    }

    function Calchighscore(){

    }

    return(
    <>
        <Header 
                score = {score}/>
                
        <div className="Maindiv">

            {spoki.map((item,index) => {
                return(
                <Card
                    key = {index}
                    cardtext = {item[0]}
                    cardimg = {item[1]}/>
                )   
            })}
        </div>
    </>
    )
}
export default Body