import { useParams } from "react-router-dom";

function Album() {
  const { slug } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h2>Album: {slug}</h2>
      <p>Album details page</p>
    </div>
  );
}

export default Album;