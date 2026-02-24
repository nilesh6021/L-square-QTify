import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

function Home() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://qtify-backend-labs.crio.do/albums/top")
      .then((res) => res.json())
      .then(setAlbums);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Top Albums</h2>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {albums.map((album) => (
          <Card key={album.slug} album={album} />
        ))}
      </div>
    </div>
  );
}

export default Home;