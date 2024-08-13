import '../assets/Card.css'


function Card(props){
    const {cardimg,cardtext} = props
    return(
        <div className="cmdiv">
            <img
                className="simg"
                src = {cardimg}
                alt= "Photo Not Available"
            />
            <p>{cardtext}</p>
        </div>
    )
}
export default Card