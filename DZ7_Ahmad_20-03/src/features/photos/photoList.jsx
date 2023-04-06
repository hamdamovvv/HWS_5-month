import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from './photosSlice';

export default function PhotosList() {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos.photos);
  const photosStatus = useSelector(state => state.photos.status);

  useEffect(() => {
    if (photosStatus === 'idle') {
      dispatch(fetchPhotos());
    }
  }, [dispatch, photosStatus]);

  let content;

  if (photosStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (photosStatus === 'succeeded') {
    content = (
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>{photo.title}</li>
        ))}
      </ul>
    );
  } else if (photosStatus === 'failed') {
    let error;
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h2>Photos</h2>
      {content}
    </section>
  );
}
