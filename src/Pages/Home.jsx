import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";

function Home() {
  const location = useLocation();
  const [posts, setPosts] = useState(() => {
    return JSON.parse(localStorage.getItem("posts")) || [];
  });

  useEffect(() => {
    if (location.state?.posts) {
      setPosts(location.state.posts);
    }
  }, [location.state]);

  const handleDelete = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <div className="home-page">
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ listStyleType: "none" }}>
            <div className="post-container">
              <div className="posts-container">
                <div className="post-content">
                  <h1 className="post-title">{post.title}</h1>
                  <p className="post-story">{post.story}</p>
                </div>
                <div className="post-media">
                  {post.media && post.media.type === "image" && (
                    <img
                      style={{height: "100px", width: "150px" }}
                      className="post-media-img"
                      src={post.media.src}
                      alt="Selected"
                    />
                  )}
                  {post.media && post.media.type === "video" && (
                    <video style={{height: "100px", width: "150px"}} className="post-media-video" controls>
                      <source src={post.media.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
