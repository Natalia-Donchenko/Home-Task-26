import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IPhoto, IParams } from "../utils/types";

const Photos: React.FC = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const params = Object.fromEntries(searchParams.entries()) as IParams;
  const albumId = params.albumId;

  const [photos, setPhotos] = useState<IPhoto[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      const jsonData = await response.json();
      setPhotos(jsonData);
    }
    fetchData();
  }, [albumId]);

  return (
    <>
      <div className="container">
        <ul className="photos__list">
          {photos.map((photo: IPhoto): JSX.Element => (
            <li key={photo.id} className="photos__list-item">
              <Link to={`/photo/${photo.id}`}>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <div className="photos__list-item_title">{photo.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Photos;