
function Card(props){
    const {cardimg,cardtext,cardkey,CalcScore} = props
    return(
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img
                className="simg"
                src = {cardimg}
                alt= "Photo Not Available"
                data-id = {cardkey}
                onClick={CalcScore}
            />
            <p className="cmp">{cardtext}</p>
        </div>
    )
}
export default Card