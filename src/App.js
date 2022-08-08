import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
import "./style.css";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
  const cards = data.map((item) => {
    return <Card item={item} />;
  });

  const fetchData = async () => {
    const results = await axios.get("/.netlify/functions/print");
    console.log(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
