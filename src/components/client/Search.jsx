import Styles from '../../assets/css/Home.module.css'

function Search () {
    return ( 
        <form className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <div className={Styles.buttonSearch}>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
        </form>
    );
}

export default Search