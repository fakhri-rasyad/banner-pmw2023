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

  async function getAPI() {
    try {
      const res = await axios.get(ENDPOINT);
      //ambil data
      const data = res.data;

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

  useEffect(() => {
    diary.length > 0 ? null : getAPI();
  }, []);

  return (
    <div>
      {judul.length > 0 ? (
        <ul>
          {judul.map((item, idx) => (
            <Link href={`diary/${item}/${isi[idx]}`}>
              <li key={idx}>
                <div className="diary-card">
                  <h1>{judul[idx]}</h1>
                  <p className="p-diary">{isi[idx]}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
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
