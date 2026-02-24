import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import "./navbar.module.css";
import { useEffect, useState } from "react";
import othersData from "../../data/OtherData";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";




function Navbar() {
  const [albums, setAlbums] = useState([]);


useEffect(() => {
  setAlbums(othersData );
}, []);

  useEffect(() => {
    fetch("https://qtify-backend.labs.crio.do/albums/top")
      .then((res) => res.json())
      .then(setAlbums);
  }, []);

  return (
     <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={albums}
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;