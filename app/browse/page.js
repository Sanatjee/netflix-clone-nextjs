import Image from "next/image";
import React from "react";
import homePageStyle from "./homePageStyle.module.css";
import Button from "../components/buttons";
import InfoIcon from "@/public/assets/InfoIcon";
import PlayButton from "@/public/assets/PlayButton";

const page = () => {
  return (
    <div className={homePageStyle.bannerContainer}>
      <Image
        src='https://ik.imagekit.io/emfpexdmyc/netflix-clone/movies/8anWpRm-wallpaper-godfather__qkPHGNwyb.jpg'
        width={2130}
        height={1060}
        alt='Godfather'
      />
      <div className={homePageStyle.metaData}>
        <div className={homePageStyle.infoContainer}>
          <Image
            src='https://ik.imagekit.io/emfpexdmyc/netflix-clone/movies/The_Godfather_EvejwMX2pL.jpg'
            width={400}
            height={174}
            alt='Godfather'
            style={{ backgroundColor: "transparent" }}
          />
          <p className={homePageStyle.description}>
            Crime Movies, Dramas, Movies Based on Books
          </p>
          <p className={homePageStyle.description}>
            Michael Corleone, the war-hero youngest son of a powerful New York
            crime boss, joins the family business when his father is targeted
            for assassination.
          </p>
        </div>
        <div className={homePageStyle.ctaContainer}>
          <Button color='primaryColor' text='Play' icon={<PlayButton />} />
          <Button color='secondaryColor' text='More Info' icon={<InfoIcon />} />
        </div>
      </div>

      {/* <div className={homePageStyle.backgroundConcealer}></div> */}
    </div>
  );
};

export default page;
