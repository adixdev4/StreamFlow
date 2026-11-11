import { useState, useEffect, useMemo, useRef } from "react";
import videos from "../data/videos";
import VideoCard from "../components/VideoCard";
import useDebounce from "../hooks/useDebounce";

function Home({ search }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const debouncedSearch = useDebounce(search, 500);
  const loaderRef = useRef(null);

  const categories = [
    "All",
    ...new Set(videos.map((video) => video.category)),
  ];

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesCategory =
        selectedCategory === "All" ||
        video.category === selectedCategory;

      const matchesSearch = video.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, debouncedSearch]);

  // Search ya category change hone par list reset
  useEffect(() => {
    setVisibleCount(6);
  }, [selectedCategory, debouncedSearch]);

  const visibleVideos = filteredVideos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredVideos.length;

  // Infinite scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setVisibleCount((previous) => previous + 6);
        }
      },
      { threshold: 0.5 }
    );

    const currentLoader = loaderRef.current;

    if (currentLoader && hasMore) {
      observer.observe(currentLoader);
    }

    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <div className="home-page">
      <h2>Recommended Videos</h2>

      

      <div className="category-list">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="video-grid">
        {visibleVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {filteredVideos.length === 0 && <p>No videos found.</p>}

      {hasMore && (
        <div ref={loaderRef} className="loading-more">
          Loading more videos...
        </div>
      )}
    </div>
  );
}

export default Home;