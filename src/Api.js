import { useEffect, useState, useRef } from "react";
import { useIntersectionObserver } from "./Observer";
const Api = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // const ref = useRef(null);
  const isIntersecting = useIntersectionObserver({ ref });

  console.log({ isIntersecting });

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const comments = await response.json();
      setData((prev) => ({ ...prev, comments }));
    };
    fetchComments();
  }, [data]);
  // console.log("data==", data.comments);
  return (
    <div>
      {data.comments ? (
        data?.comments?.map((comment) => (
          <div key={comment.id}>
            <h3>
              {comment.id} {comment.name}
            </h3>
            <p>{comment.body}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      {/* {isLoading && <p>Loading...</p>} */}
      <div ref={ref}></div>
    </div>
  );
};

export default Api;
