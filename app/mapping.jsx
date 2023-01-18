import React from "react";

const Mapping = () => {
  {
    photos.map((photo) => {
      return (
        <>
          <div className="row-span-1 col-span-1 border rounded-lg opacity-70 hover:opacity-100 border-darker-blue hover:border-dark-blue lg:h-96 md:h-64 sm:h-32 ease-in-out duration-500 bg-cover bg-center">
            <img key={photos.id} src={photos.url} alt={photos.alt}></img>
          </div>
        </>
      );
    });
  }
};

const photos = [
  {
    url: "/photos/1.jpg",
    id: 1,
    alt: "",
  },
  {
    url: "/photos/2.jpg",
    id: 2,
    alt: "",
  },
  {
    url: "/photos/3.jpg",
    id: 3,
    alt: "",
  },
  {
    url: "/photos/6.jpg",
    id: 4,
    alt: "",
  },
];

export default Mapping;
