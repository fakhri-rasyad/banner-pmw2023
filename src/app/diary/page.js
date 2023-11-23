"use client";
import "@/styles/diary.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Diary() {
  const ENDPOINT = "/User";
  const [diary, setDiary] = useState([]);

  async function getAPI() {
    try {
      const res = await axios.get(ENDPOINT);
      let respon_data = res.data;
      console.log(respon_data);
      setDiary(respon_data);
    } catch (e) {
      console.log(`Error is ${e}`);
    }
  }

  useEffect(() => {
    diary.length > 0 ? null : getAPI();
  }, []);

  return (
    <div className="diary-container">
      {diary.length > 0 ? (
        diary.map((e) => diaryCard(e.name, e.id))
      ) : (
        <h1>Fetching API</h1>
      )}
    </div>
  );
}

function diaryCard(nama, id) {
  return (
    <div className="diary-card" key={id}>
      <h1>{id}</h1>
      <p>{nama}</p>
    </div>
  );
}
