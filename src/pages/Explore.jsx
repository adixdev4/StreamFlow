
import videos from "../data/videos"; 
import VideoCard from "../components/VideoCard";

function Explore() {
  return (
    <main className="content">
      <h1>Explore Videos</h1>

      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </main>
  );
}

export default Explore;
