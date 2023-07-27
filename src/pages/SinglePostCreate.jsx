import { AppContext } from "../App";
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SinglePostCreate = () => {
  const kontekst = useContext(AppContext);

  const [description, setDescription] = useState("");
  const [imgURL, setImageURL] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(description);
    console.log(imgURL);
    const newPost = { id: "1111", image: imgURL, text: description };

    console.log(newPost);
    kontekst.setData([newPost, ...kontekst.data]);
    setDescription("");
    setImageURL("");
    navigate("/");
  };

  return (
    <div>
      <p>Create new post</p>
      <br />
      <form onSubmit={handleSubmit}>
        <label>DESCRIPTION:</label>
        <br />
        <input
          type="text"
          id="desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label>IMAGE URL:</label>
        <br />
        <input
          type="text"
          id="url"
          value={imgURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">SUBMIT AND GO TO HOME PAGE</button>
      </form>
    </div>
  );
};
export default SinglePostCreate;

// Date.now()
