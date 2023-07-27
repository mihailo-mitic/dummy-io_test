import "./Post.css";

const Post = (props) => {
  return (
    <section>
      <p>{props.text}</p>
      <img src={props.img} alt={props.img} />
      <p>published on: {props.date}</p>
      <p>CLICK FOR DETAILS</p>
    </section>
  );
};
export default Post;
