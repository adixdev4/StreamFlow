import { useVideos } from "../context/VideoContext";
import videos from "../data/videos";
import VideoCard from "../components/VideoCard";

function LikedVideos() {
  const { likedVideos } = useVideos();

  const likedList = videos.filter((video) =>
    likedVideos.includes(video.id)
  );

  return (
    <div className="home-page">
      <h2>❤️ Liked Videos</h2>

      {likedList.length === 0 ? (
        <p>You haven't liked any videos yet.</p>
      ) : (
        <div className="video-grid">
          {likedList.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}

export default LikedVideos;