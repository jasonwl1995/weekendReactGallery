function GalleryList({galleryList}) {
  return (
    <ul>
    {galleryList.map((gallery) => {
      return(
        <li key={gallery.list}>
        </li>
      );
      })}
    </ul>
  );
}