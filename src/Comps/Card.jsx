import '../assets/Card.css'
import logo from '../../public/vite.svg'

function Card(props){
    const {} = props
    return(
        <div className="cmdiv">
            <img
                className="simg"
                src = {logo} 
                alt= ""
            />
            <p>Text bois</p>
        </div>
    )
}
export default Card