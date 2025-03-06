import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Write.css";

function Write() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState("");
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const navigate = useNavigate();

  const handleMouseEnter = () => setShowOptions(true);
  const handleMouseLeave = () => setShowOptions(false);

  const handleFileInputClick = (type) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = type === "image" ? "image/*" : "video/*";

    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(URL.createObjectURL(file));
        setFileType(type);
      }
    };

    fileInput.click();
  };

  const handlePublish = () => {
    const newPost = {
      id: Date.now(),
      title,
      story,
      media: selectedFile ? { type: fileType, src: selectedFile } : null,
    };
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = [newPost, ...savedPosts];
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    navigate("/", { state: { posts: updatedPosts } });

    // Reset the form fields
    setTitle("");
    setStory("");
    setSelectedFile(null);
    setFileType("");
  };

  return (
    <div className="write-page">
      <div className="main-container">
        <div>
          <input
            className="input_title input-field"
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            className="input_story input-field"
            placeholder="Tell Your Story..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />
        </div>

        <div
          className="upload-button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="upload-btn">Upload</button>
          {showOptions && (
            <div className="dropdown">
              <div
                className="dropdown-option"
                onClick={() => handleFileInputClick("image")}
              >
                Image
              </div>
              <div
                className="dropdown-option"
                onClick={() => handleFileInputClick("video")}
              >
                Video
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedFile && (
        <div className="media-preview">
          {fileType === "image" && (
            <img
              src={selectedFile}
              alt="Selected"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
          {fileType === "video" && (
            <video
              controls
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src={selectedFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}

      <button className="publish-button" onClick={handlePublish}>
        Publish
      </button>
    </div>
  );
}

export default Write;