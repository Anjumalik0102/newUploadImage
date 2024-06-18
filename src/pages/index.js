
import { useState } from "react";

import styles from "@/styles/Home.module.css";


export default function Home() {
  const [images, setImages] = useState([
    {
      value: undefined,
      id: 1,
    },
    {
      value: undefined,
      id: 2,
    },
    {
      value: undefined,
      id: 3,
    },
    {
      value: undefined,
      id: 4,
    },
  ])

  const onFileChange = (e) => {
    const elementId = parseInt(e.target.id)

    const newArray = images.map((data) => {
      if (data.id === elementId) {
        return {
          ...data,
          value: URL.createObjectURL(e.target.files[0])
        }
      } else {
        return data
      }
    })

    setImages(newArray)

  }



  const uploadFileOnClick = (e) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.id = e.target.id
    // Add event listener to handle file selection
    input.addEventListener('change', (e) => onFileChange(e));

    // Trigger click event on the input element
    input.click();
  }

  return (
    <>
      <div className={styles.home}>

        <div className={styles.leftImageDiv}
          style={{
            position: 'relative'
          }}
        >
          {
            images.map((image) => {

              if (image.value) {
                return (
                  <div
                    key={image.id}
                    className={styles.image1}>
                    <img
                      id={image.id}
                      src={image.value}
                      onClick={uploadFileOnClick}
                      style={{
                        height: '100px',
                        width: '100px'
                      }} />

                  </div>
                )
              }
              else {
                return (
                  <div
                    key={image.id}
                    className={styles.image1}>
                    <span id={image.id} onClick={uploadFileOnClick}>upload</span>
                  </div>
                )
              }

            })
          }
          {/* <div className={styles.image1}>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => console.log(e.target.value)} />
          </div>
          <div className={styles.image1}>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => console.log(e.target.value)} />
          </div>
          <div className={styles.image1}>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => console.log(e.target.value)} />
          </div>
          <div className={styles.image1}>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => console.log(e.target.value)}
            />
          </div> */}


          <div className={styles.image1}
            style={{
              position: 'absolute',
              backgroundColor: 'black',
              top: '5%',
              left: '25%',
              height: '90%',
              width: '70%'
            }}
          >
            <input type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => console.log(e.target.value)} />
          </div>




        </div>
        <div className={styles.rightImageDiv}>
          <div className={styles.image1}></div>
          <div className={styles.image1}></div>
          <div className={styles.image1}></div>
          <div className={styles.image1}></div>
          <div className={styles.image1}></div>


        </div>
      </div>

    </>
  );
}
