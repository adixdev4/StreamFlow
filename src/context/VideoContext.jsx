import { createContext, useContext, useState } from "react";

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [likedVideos, setLikedVideos] = useState([]);
  const [watchLater, setWatchLater] = useState([]);

  const toggleLike = (id) => {
    setLikedVideos((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const toggleWatchLater = (id) => {
    setWatchLater((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <VideoContext.Provider
      value={{ likedVideos, watchLater, toggleLike, toggleWatchLater }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export function useVideos() {
  return useContext(VideoContext);
}