import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IAlbum, IParams } from "../utils/types";

const Albums: React.FC = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const params = Object.fromEntries(searchParams.entries()) as IParams;
  const userId = params.userId;

  const [albums, setAlbums] = useState<IAlbum[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
      const jsonData = await response.json();
        setAlbums(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      {albums.length > 0 ? (
        <ul className="albums__list">
          {albums.map((album: IAlbum) => (
            <li key={album.id} className="albums__list-item">
              <Link to={`/photos?albumId=${album.id}`}>
                {album.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading albums...</p>
      )}
    </div>
  );
};

export default Albums;