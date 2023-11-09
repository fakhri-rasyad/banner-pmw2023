import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="banner-container">
        {/*Kartunya */}
        <div className="header-banner-container">
          {/*Foto Proil dan Nama */}
          <div className="profie-header-banner">
            {/*Foto Proil dan Nama */}
            <Image
              src="/assets/profile.png"
              alt="Picture of the author"
              width={120}
              height={120}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <div className="content-header-banner">
            <div className="bio-nim-header-banner">
              <h1>Fakhri Rasyad</h1>
              <p>D121211017</p>
              <p>"Testing"</p>
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
