import React, { useState } from 'react';
import './Header.css';
import Items from './Items';

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, Items.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const currentItem = Items[currentIndex];

  return (
    <>
     <section id='azkar' key={currentItem.count} className='hadith'>
      <h3>{currentItem.category}</h3>
      <div className='container'>
        <div className='hadithcontainer'>
          <p>{currentItem.content}</p>
        </div>
        <div className='buttons'>
          <div className='prev' onClick={handlePrev}>
            سابق
          </div>
          <div className='number'>{currentItem.count}/15</div>
          <div className='next' onClick={handleNext}>
            التالي
          </div>
        </div>
      </div>
    </section>
    <section className='lectures'>
      <h3>محاضرات</h3>
      <div className='container'>
        <div className='container-lecture'>
          <div className='Right'>
          <div id='lec' className='lec row align-items-center'>
  <div className='col-md-6'>
    <div id='lec-text' className='lec-text text-md-start text-md-end'>
      <h4 className='mb-4'>لماذا أنزل قرآن بلسان عربي</h4>
      <p>محاضرة رائعة من فضيلة الشيخ الشعراوي</p>
    </div>
  </div>
  <div className='col-md-6'>
    <img style={{width:"150px",borderRadius:"50%"}} src='sha.jpg' className='img-fluid  ' alt='الصورة'/>
  </div>
</div>

<div id='lec' className='lec row align-items-center'>
<div className='col-md-6'>
    <div id='lec-text' className='lec-text text-md-start text-md-end'>
      <h4 className='mb-4'>لماذا أنزل قرآن بلسان عربي</h4>
      <p>محاضرة رائعة من فضيلة الشيخ الشعراوي</p>
    </div>
  </div>
  <div className='col-md-6'>
    <img style={{width:"150px",borderRadius:"50%"}} src='sha.jpg' className='img-fluid ' alt='الصورة'/>
  </div>
</div>

<div id='lec' className='lec row align-items-center'>
 
  <div className='col-md-6'>
    <div id='lec-text' className='lec-text text-md-start text-md-end'>
      <h4 className='mb-4'>لماذا أنزل قرآن بلسان عربي</h4>
      <p>محاضرة رائعة من فضيلة الشيخ الشعراوي</p>
    </div>
  </div>
  <div className='col-md-6'>
    <img style={{width:"150px",borderRadius:"50%"}} src='sha.jpg' className='img-fluid ' alt='الصورة'/>
  </div>
</div>

<div id='lec' className='lec row align-items-center'>
<div className='col-md-6'>
    <div id='lec-text' className='lec-text text-md-start text-md-end'>
      <h4 className='mb-4'>لماذا أنزل قرآن بلسان عربي</h4>
      <p>محاضرة رائعة من فضيلة الشيخ الشعراوي</p>
    </div>
  </div>
  <div className='col-md-6'>
    <img style={{width:"150px",borderRadius:"50%"}} src='sha.jpg' className='img-fluid ' alt='الصورة'/>
  </div>

</div>
          </div>
          <div className='Left'>
<iframe src='https://www.youtube.com/embed/CMO5XQtPb3A' frameBorder={0}></iframe>
<p>محاضرة شيقة مع حضرة الشيخ الشعراوي</p>
          </div>
        </div>
      </div>
    </section>
    </>
   
  );
}
