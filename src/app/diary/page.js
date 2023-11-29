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
    setDiaryOnline();
  }

  function inputHandler(value) {
    setInputIsiBaru(value);
  }

  function onKeyDownHandler(e) {
    if (e.code == "Enter") nameHandler();
  }

  //GET
  async function getDiary() {
    alert("Data Telah Di Fetch");
    try {
      const res = await axios.get(ENDPOINT);
      //ambil data
      const data = res.data;
      console.log(data);
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
      var newInput = {
        createdAt: new Date().toISOString(),
        name: `${inputIsiBaru}`,
        id: `${diary.length + 1}`,
      };
      const res = await axios.post(ENDPOINT, newInput);
    } catch (e) {
      console.log(`Error is :${e}`);
    }
    getDiary();
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
        "API loading"
      )}
    </div>
  );
}
