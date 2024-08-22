import { useState,useEffect } from "react";
import Card from './Card'
import Header from "./Header";

function Body(props){

    const [score,Setscore] = useState(0);
    const [highscore,Sethighscore] = useState(0);
    const [spoki,Setspoki] = useState([]);
    const [preselc,Setpreselc] = useState([])
    const [loading,Setloading] = useState(true);


    useEffect(()=> {
        async function GetPoki() {
            Setloading(true)
            let pokiarray =[]
            
            for (let i = 1; i <= 15; i++){
            let rannum = Math.floor(Math.random() * 150) + 1
            let fetchpoki = await fetch(`https://pokeapi.co/api/v2/pokemon/${rannum}/`);
            let pokedata = await fetchpoki.json();
            let pname = pokedata.name
            let pimg = pokedata.sprites.front_default
            let pnum = pokedata.id
            pokiarray.push([pname,pimg,pnum])
        
            }

            Setspoki(pokiarray)
            Setloading(false)
            
        }
        GetPoki();
    },[score])


    function CalcScore(e){
        let currselc = e.target.dataset.id
        let prevarray = []

        if (preselc.includes(currselc)) {
            Calchighscore();
        }else{
            prevarray.push([currselc])
            Setpreselc(preselc +prevarray+",");
            Setscore(score + 1);
        }
        console.log("this is the prev selc" + preselc + "this is the pokemons current id" + currselc)
    }

    function Calchighscore(){
        if(score > highscore){
            Sethighscore(score)
        }
        Setscore(0)
        Setpreselc([])
    }

    return(
    <>
        <Header 
                score = {score}
                highscore = {highscore}/>
                
        <div className="Maindiv">

            { loading ? <h1>Loading...</h1> :
                spoki.map((item,index) => {
                    return(
                    <Card
                        key = {index}
                        cardkey = {item[2]}
                        cardtext = {item[0]}
                        cardimg = {item[1]}
                        CalcScore={CalcScore}/>
                    )   
                })}
        </div>
        <h2 className="border-t-2 border-white h2score">High Score: {highscore}</h2>
    </>
    )
}
export default Body