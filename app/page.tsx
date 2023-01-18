"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { arrayBuffer } from "stream/consumers";
import Mapping from "./mapping";
import { useEffect } from "react";
import { photos } from "./photos.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const getData = () => {
    fetch("photos.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid lg:grid-rows-auto grid-flow-rows lg:grid-cols-4 md:grid-rows-3 md:grid-cols-3 sm:grid-rows-2 sm:grid-cols-2 gap-3">
      <div className="lg:row-span-2 lg:col-span-2 md:row-span-2 md:col-span-1 sm:row-span-1 sm:col-span-2 border border-dark-blue border-4 hover:border-darker-blue opacity-70 hover:opacity-100 ease-in-out duration-500">
        {/* Display looks good, however will need to change the heading tag at the mobile height for better responsiveness and design */}
        <img src="./photos/DesktopBanner.svg"></img>
      </div>
      {/* Here will be an array of photos, by keeping the top ^ div just as a Welcome message,the rest can be automated */}

      {photos.map((photo) => (
        <div
          key={photo.id}
          className="row-span-1 col-span-1 border rounded-lg opacity-70 hover:opacity-100 border-darker-blue hover:border-dark-blue lg:w-full lg:h-full md:w-72 md:h-72 sm:w-64 sm:h-64 ease-in-out duration-500 lg:bg-cover md:bg-cover sm:bg-cover"
        >
          <img
            src={photo.url}
            alt={photo.alt}
            className="lg:w-full lg:h-full md:w-72 md:h-72 sm:w-64 sm:h-64"
          ></img>
        </div>
      ))}
    </div>
  );
}
