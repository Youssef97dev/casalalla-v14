"use client";
import React from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";

const images = [
  {
    src: "/gallery/gallery-1.webp",
  },
  {
    src: "/gallery/gallery-2.webp",
  },
  {
    src: "/gallery/gallery-3.webp",
  },
  {
    src: "/gallery/gallery-4.webp",
  },
  {
    src: "/images/activities-slide-2.webp",
  },
  {
    src: "/images/activities-slide-3.webp",
  },
  {
    src: "/images/activities-slide-7.webp",
  },
  {
    src: "/images/about-large.webp",
  },
  {
    src: "/images/gallery-3.webp",
  },
  {
    src: "/gallery/gallery-5.webp",
  },
  {
    src: "/gallery/gallery-6.webp",
  },
  {
    src: "/gallery/gallery-7.webp",
  },
  {
    src: "/gallery/gallery-8.webp",
  },
  {
    src: "/images/gallery-2.webp",
  },
  {
    src: "/gallery/gallery-9.webp",
  },
  {
    src: "/images/book-mobile.webp",
  },
  {
    src: "/gallery/gallery-10.webp",
  },
  {
    src: "/gallery/gallery-11.webp",
  },
  {
    src: "/gallery/gallery-12.webp",
  },
  {
    src: "/gallery/gallery-13.webp",
  },
  {
    src: "/gallery/gallery-14.webp",
  },
  {
    src: "/gallery/gallery-15.webp",
  },
  {
    src: "/gallery/gallery-16.webp",
  },
  {
    src: "/gallery/gallery-17.webp",
  },
  {
    src: "/gallery/gallery-18.webp",
  },
  {
    src: "/images/hero-casalalla-large.webp",
  },
  {
    src: "/gallery/gallery-19.webp",
  },
];

const MemoizedImage = React.memo(({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={300}
    height={300}
    loading="lazy" // Lazy loading
    placeholder="blur"
    className="rounded-sm w-full h-full"
  />
));

// Setting the display name for the MemoizedImage component
MemoizedImage.displayName = "MemoizedImage";

const Gallery = () => {
  return (
    <div id="gallery" className="w-full  py-5 px-4 ">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail]}
        elementClassNames="masonry"
      >
        {images.map((image, index) => (
          <Link href={image.src} key={index}>
            <div className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden">
              <MemoizedImage
                src={`${image.src}`}
                alt={`Restaurants à Lalla takerkoust, Restaurants à Marrakech, Restaurants à Agafay, Restaurants à Imlil, Restaurants Désert Agafay, Restaurants Montagnes Atlas, Riad Marrakech, Hotel Riad Casa Lalla`}
              />
            </div>
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;
