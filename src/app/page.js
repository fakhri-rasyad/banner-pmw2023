"use client";

import Image from "next/image";
import "@styles/home.css";
import { useEffect, useState } from "react";

export default function Home() {
  let [nama, setNama] = useState("Fakhri Rasyad");
  let [inputNamaBaru, setInputNamaBaru] = useState("");

  function nameHandler() {
    if (inputNamaBaru.length == 0) {
      alert("Input tidak boleh kosong!");
      return;
    }
    setNama(inputNamaBaru);
  }

  function inputHandler(value) {
    setInputNamaBaru(value);
  }

  function onKeyDownHandler(e) {
    if (e.code == "Enter") nameHandler();
  }

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
              objectFit="contain"
              fill
            />
          </div>
          <div className="content-header-banner">
            <div className="bio-nim-header-banner">
              <h1>{nama}</h1>
              <div className="nim-header-banner">
                <p>D121211017</p>
                <p>"Testing"</p>
                <p>TEST_STAGING</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/*Tombol CTA */}
          <input
            placeholder="Masukkan namamu!"
            onKeyDown={(value) => {
              onKeyDownHandler(value);
            }}
            onInput={(value) => inputHandler(value.target.value)}
          ></input>
          <button
            onClick={() => {
              nameHandler();
            }}
          >
            GANTI NAMA
          </button>
        </div>
      </div>
    </div>
  );
}
