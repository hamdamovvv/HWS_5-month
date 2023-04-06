import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PhotoPage() {
  const { id } = useParams();
  const photo = useSelector(state => state.photos.photos.find(photo => photo.id === parseInt(id)));

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <section>
      <h2>{photo.title}</h2>
      <img src={photo.url} alt={photo.title} />
    </section>
  );
}
