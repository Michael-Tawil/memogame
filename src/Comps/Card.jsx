
function Card(props){
    const {cardimg,cardtext,cardkey,CalcScore} = props
    return(
        <div className="cmdiv">
            <img
                className="simg"
                src = {cardimg}
                alt= "Photo Not Available"
                data-id = {cardkey}
                onClick={CalcScore}
            />
            <p>{cardtext}</p>
        </div>
    )
}
export default Card