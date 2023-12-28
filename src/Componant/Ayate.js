import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Ayate.css'; 


export default function Ayate() {
  const { nb } = useParams();
  const [ayate, setAyate] = useState([]);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  useEffect(() => {
    fetch('http://api.alquran.cloud/v1/surah/' + nb + '/ar.alafasy')
      .then((data) => data.json())
      .then((data) => {
        setAyate(data.data.ayahs);
        console.log(data.data.ayahs);
      });
  }, [nb]);

  const handleAudioEnd = () => {
    if (currentAudioIndex < ayate.length - 1) {
      setCurrentAudioIndex(currentAudioIndex + 1);
    }
  };

  return (
    <div className="Ayate">
      {ayate.map((c, i) => (
        <div class="container-text "  key={i}>

          <p>{c.text}</p>
        </div>
      ))}
      {ayate.map((c, i) => (
        <div className={`audio ${i === currentAudioIndex ? 'visible' : 'hidden'}`} key={i}>
          <audio controls autoPlay={i === currentAudioIndex} onEnded={handleAudioEnd}>
            <source src={c.audio} type="audio/ogg" />
            <source src={c.audio} type="audio/mpeg" />
            
          </audio>
        </div>
      ))}
    </div>
  );
}