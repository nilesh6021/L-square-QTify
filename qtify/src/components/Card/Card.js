import { useNavigate } from "react-router-dom";

function Card({ album }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: 150,
        cursor: "pointer",
      }}
      onClick={() => navigate(`/album/${album.slug}`)}
    >
      <img
        src={album.image}
        alt={album.title}
        style={{ width: "100%", borderRadius: 10 }}
      />
      <p>{album.title}</p>
    </div>
  );
}

export default Card;