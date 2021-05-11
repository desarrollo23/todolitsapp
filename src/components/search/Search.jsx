import '../styles/Search.css';

function Search(props){

    return (
        <div className="search">
             <input 
            type="text"
            className="form-control"
            value={props.value}
            onChange={props.onChange}
            placeholder = "Buscar..."/>
        </div>
       
    )
}

export default Search;