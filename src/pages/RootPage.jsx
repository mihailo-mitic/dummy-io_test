import axios from "axios";
import { useEffect, useContext } from "react";
import Post from "../Post";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

const RootPage = () => {
  const config = { headers: { "app-id": "64bcc486c6e93e3fa1ff6951" } };
  const kontekst = useContext(AppContext);
  const fetchData = async () => {
    console.log(kontekst.data.length);

    try {
      const response = await axios.get(
        "https://dummyapi.io/data/v1/post",
        config
      );
      if (kontekst.data.length < response.data.data.length) {
        kontekst.setData(response.data.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Link to="/create">
        <button>create new post</button>
      </Link>
      <div>
        {kontekst.data.map((post) => {
          return (
            <Link to={`/${post.id}`} key={post.id}>
              <Post text={post.text} img={post.image} date={post.publishDate} />
            </Link>
          );
        })}
      </div>
      <Link to="/create">
        <button>create new post</button>
      </Link>
    </>
  );
};
export default RootPage;
