"use client";
import "@/styles/diary.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Diary() {
  const ENDPOINT = "https://6555c3a784b36e3a431e45f1.mockapi.io/User";
  const [diary, setDiary] = useState([]);
  const [judul, setJudul] = useState([]);
  const [isi, setIsi] = useState([]);
  const [nama, setNama] = useState("");
  const [inputIsiBaru, setInputIsiBaru] = useState("");

  function nameHandler() {
    if (inputIsiBaru.length == 0) {
      alert("Input tidak boleh kosong!");
      return;
    }
    setNama(inputIsiBaru);
    pushToDiary();
  }

  function inputHandler(value) {
    setInputIsiBaru(value);
  }

  function onKeyDownHandler(e) {
    if (e.code == "Enter") nameHandler();
  }

  function pushToDiary() {
    console.log(nama);
    setDiary([...diary, { name: nama, id: (diary.length + 1).toString() }]);
    const judul = diary.map((e) => e.id);
    const isi = diary.map((e) => e.name);

    setJudul(judul);
    setIsi(isi);
    console.log(diary);
    setDiaryOnline();
  }

  //GET
  async function getDiary() {
    try {
      const res = await axios.get(ENDPOINT);
      //ambil data
      const data = res.data;
      setDiary(data);

      //ambil judul
      const judul = data.map((item) => item.id);
      setJudul(judul);

      //ambil isi_diary
      const isi_diary = data.map((item) => item.name);
      setIsi(isi_diary);
    } catch (e) {
      console.log(`Error is ${e}`);
    }
  }

  async function setDiaryOnline() {
    try {
      const res = await axios.post(ENDPOINT, diary);
      console.log(res.status);
    } catch (e) {
      console.log(`Error is :${e}`);
    }
  }

  useEffect(() => {
    diary.length > 0 ? null : getDiary();
  }, []);

  return (
    <div>
      {judul.length > 0 ? (
        <>
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
          <ul>
            {judul.map((item, idx) => (
              <Link
                className="diary-card"
                key={idx}
                href={`diary/${item}/${isi[idx]}`}
              >
                <li key={idx}>
                  <div>
                    <h1>{judul[idx]}</h1>
                    <p className="p-diary">{isi[idx]}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </>
      ) : (
        "API not loading"
      )}
    </div>
  );
}

// function diaryCard(nama, id) {
//   return (

//   );
// }
