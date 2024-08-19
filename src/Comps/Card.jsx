
function Card(props){
    const {cardimg,cardtext,cardkey,CalcScore,id} = props
    return(
        <div className="cmdiv">
            <img
                className="simg"
                src = {cardimg}
                alt= "Photo Not Available"
                key = {cardkey}
                id = {cardkey}
                onClick={CalcScore}
            />
            <p>{cardtext}</p>
        </div>
    )
}
export default Card