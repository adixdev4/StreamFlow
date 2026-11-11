import { useVideos } from "../context/VideoContext";
import videos from "../data/videos";
import VideoCard from "../components/VideoCard";

function WatchLater() {
  const { watchLater } = useVideos();

  const savedList = videos.filter((video) =>
    watchLater.includes(video.id)
  );

  return (
    <div className="home-page">
      <h2>⏰ Watch Later</h2>

      {savedList.length === 0 ? (
        <p>No saved videos yet.</p>
      ) : (
        <div className="video-grid">
          {savedList.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchLater;