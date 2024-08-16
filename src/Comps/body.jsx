import { useState } from "react";
import Card from './Card'
import Header from "./Header";

function Body(props){

    const [highscore,Sethighscore] = useState(2);
    const [cardimg,Setcardimg] = useState("");
    const [cardtext,Setcardtext] = useState("hello1");

    return(
    <>
        <Header 
                highscore = {highscore}/>
                
        <div className="Maindiv">
            
            <Card
                cardimg = {cardimg}
                cardtext = {cardtext}/>
            <Card
                cardimg = {cardimg}
                cardtext = {cardtext}/>
            <Card
                cardimg = {cardimg}
                cardtext = {cardtext}/>
            <Card
                cardimg = {cardimg}
                cardtext = {cardtext}/>
            <Card
                cardimg = {cardimg}
                cardtext = {cardtext}/>
            <Card
                cardimg = {cardimg}
                cardtext = {cardtext}/>
            <Card
                cardimg = {cardimg}
                cardtext = {cardtext}/>
            <Card
                cardimg = {cardimg}
                cardtext = {cardtext}/>
            <Card
                cardimg = {cardimg}
                cardtext = {cardtext}/>
        </div>
    </>
    )
}
export default Body