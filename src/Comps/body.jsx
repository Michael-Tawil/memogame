import { useState,useEffect } from "react";
import Card from './Card'
import Header from "./Header";

function Body(props){

    const [score,Setscore] = useState(0);
    const [highscore,Sethighscore] = useState(0);
    const [cardimg,Setcardimg] = useState("");
    const [cardtext,Setcardtext] = useState("");
    const [spoki,Setspoki] = useState([]);
    const [preselc,Setpreselc] = useState("");

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
    },[score])


    /* function CalcScore(e){
        let currselc = e.target.id
        console.log(currselc)
        if (preselc == currselc) {
            Calchighscore();
        }else{
            preselc = currselc;
            Setscore(score + 1);
        }
    } */

    /* function Calchighscore(){
        if(score > highscore){
            highscore = score
        }else{
            Setscore(0);
        }
    } */

    return(
    <>
        <Header 
                score = {score}/>
                
        <div className="Maindiv">

            {spoki.map((item,index) => {
                return(
                <Card
                    key = {index}
                    id = {index}
                    cardtext = {item[0]}
                    cardimg = {item[1]}
                    CalcScore={CalcScore}/>
                )   
            })}
        </div>
    </>
    )
}
export default Body