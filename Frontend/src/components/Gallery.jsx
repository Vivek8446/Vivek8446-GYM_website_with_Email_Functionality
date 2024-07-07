import React from "react";

function Gallery() {
  const gallery = [
    "/therock2.jpg",
    "/therock1.jpg",
    "/therock4.jpg",
    "/therock6.jpeg",
    "/therock8.jpg",
    "/therock3.jpg",
    "/therock9.webp",
    "/therock4.jpg",
    "/therock5.jpg",
  ];
  return <>
    <section className="gallery">
        <h1>BETTER BEATS BEST</h1>
        <div className="images">
          <div>

        {
          gallery.slice(0,3).map((element,index)=>(
            <img key={index} src={element} alt="" />
          ))
        }
          </div>
        
        
          <div>

        {
          gallery.slice(3,6).map((element,index)=>(
            <img key={index} src={element} alt="" />
          ))
        }
          
        </div>
        
          <div>

        {
          gallery.slice(6,9).map((element,index)=>(
            <img key={index} src={element} alt="" />
          ))
        }
          </div>
        </div>
    </section>
  </>;
}

export default Gallery;
