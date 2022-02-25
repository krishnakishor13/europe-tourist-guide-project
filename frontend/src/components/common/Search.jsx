import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Search = () => {
    const dispatch = useDispatch();
  const [search, setSearch] = useState();

  const inputSearch = (event) => {
    setSearch(event.target.value);
  };

  const submitAction = () => {
    dispatch(push("/places?search=" + search));
  };

  return (
    <form onSubmit={submitAction}
        className="bg-mask">
            <h2>Happiest Place on Earth!</h2>
    <input name="search" type="text" onChange={inputSearch} placeholder="search your destination &#128269;" />
    {/* <a  onclick={()=>console.log("test")}>
      </a> */}
 </form>
)
}

export default Search
