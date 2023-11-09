import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="body">
      <div className="banner-container">
        {/*Kartunya */}
        <div className="header-banner-container">
          {/*Foto Proil dan Nama */}
          <div className="profile-header-banner">
            {/*Foto Proil dan Nama */}
            <Image
              src="/assets/profile.png"
              alt="Picture of the author"
              fill
              objectFit="contain"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <div className="content-header-banner">
            <div className="bio-nim-header-banner">
              <h1>Fakhri Rasyad</h1>
              <div className="nim-header-banner">
                <p>D121211017</p>
                <p>"Testing"</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/*Tombol CTA */}
          <button>HALLO!</button>
        </div>
      </div>
    </div>
  );
}
