import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
export default function Quran() {
    const[datas,setdata]=useState([])
    useEffect(()=>{
        fetch('http://api.alquran.cloud/v1/quran/quran-uthmani')
        .then((data)=>{return data.json()})
        .then((data)=>{setdata(data.data.surahs);console.log(data.data.surahs)})
    },[])
  return (
    <>
      <section className='quran'>
        <h3>القرآن الكريم</h3>
        <div className='container'>
        <div className='surahcontainer'>
        {datas.map((surah, index) => (
          
         
            <div key={index}  className='surah'>
              <p>{surah.number}</p>
              <p>{surah.name}</p>
              <p>{surah.englishName}</p>
         <button className='btn btn-success'><Link className='link' to={'/Ayate/'+surah.number}>إقراء الأن</Link></button>
            </div>
        
         
        ))}
          </div>
        </div>
      </section>

    </>
  );
}
