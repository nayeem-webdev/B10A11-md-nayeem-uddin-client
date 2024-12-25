import { useLoaderData } from "react-router-dom";
import Title from "../components/Title";
import GalleryCard from "../components/GalleryCard";

const Gallery = () => {
  const foods = useLoaderData().data;
  console.log(foods);
  return (
    <>
      <Title
        subHeading="Enjoy our world class food, cooked by top chef of teh country"
        pageName="Gallery"
        backgroundImage="https://images.pexels.com/photos/9510363/pexels-photo-9510363.jpeg"
      />
      {foods.length > 0 ? (
        <div className="container mx-auto py-16 px-6 min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {foods.map((food) => (
            <GalleryCard food={food} key={food._id} />
          ))}
        </div>
      ) : (
        <div className="container mx-auto py-16 px-6 min-h-screen flex justify-center items-center">
          Nothing to show
        </div>
      )}
    </>
  );
};

export default Gallery;
