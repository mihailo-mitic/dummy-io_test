import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Post from "../Post";

const SinglePost = () => {
  const kontekst = useContext(AppContext);
  const postID = useParams();

  const selectedPost = kontekst.data.find((e) => e.id == postID.id);

  return (
    <div>
      <Post
        text={selectedPost.text}
        img={selectedPost.image}
        date={selectedPost.publishDate}
      />
      <Link to={`/${selectedPost.id}/edit`}>
        <button>edit this post</button>
      </Link>
      <br />
      <br />
      <Link to={"/"}>
        <button>BACK TO HOME</button>
      </Link>
    </div>
  );
};
export default SinglePost;
