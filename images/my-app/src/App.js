import React, { useState } from "react";
import { app } from "./firebase";

function App() {
  const [fileUrl, setFileUrl] = useState('');
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
    const doc = await collectionRef.doc(fileName).set({ name: fileName, url: fileUrl });
    console.log("Uploaded", fileName, "url:", fileUrl);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="file" onChange={fileHandler} />
        <input type="text" name="name" placeholder="NAME" />
        <button>Post</button>
      </form>
    </>
  );
}

export default App;
