import React, { useState, useEffect } from "react";
import { app } from "./firebase";

function ImagesRender() {
  const [fileUrl, setFileUrl] = useState("");
  const [docus, setDocus] = useState([]);
  const fileHandler = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const filePath = storageRef.child(file.name);
    await filePath.put(file);
    console.log("Uploaded", file.name);
    const linkUrl = await filePath.getDownloadURL();
    setFileUrl(linkUrl);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const fileName = e.target.name.value;
    if (!fileName) {
      alert("Write a name");
      return;
    }
    const collectionRef = await app.firestore().collection("images");
    const doc = await collectionRef
      .doc(fileName)
      .set({ name: fileName, url: fileUrl });
    console.log("Uploaded", fileName, "url:", fileUrl);
  };

  useEffect( () => {
    (async ()=>{
      const docusList = await app.firestore().collection("images").get();
    setDocus(docusList.docs.map((doc) => doc.data()));
    })()
  }, []);
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="file" onChange={fileHandler} />
        <input type="text" name="name" placeholder="Name" />
        <button>Post</button>
      </form>
      <ul>
        {docus.map((doc, index) => (
          <li key={index}>
            <h3>{doc.name}</h3>
            <img src={doc.url} height="120px" width="95px" alt={doc.name} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ImagesRender;