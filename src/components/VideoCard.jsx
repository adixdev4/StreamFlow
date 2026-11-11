import { useNavigate } from "react-router-dom";
import { useVideos } from "../context/VideoContext";

function VideoCard({ video }) {
  const navigate = useNavigate();

  const {
    likedVideos,
    watchLater,
    toggleLike,
    toggleWatchLater,
  } = useVideos();

  const isLiked = likedVideos.includes(video.id);
  const isSaved = watchLater.includes(video.id);

  return (
    <div className="video-card">
      <div
        className="thumbnail-container"
        onClick={() => navigate(`/watch/${video.id}`)}
      >
        <img src={video.thumbnail} alt={video.title} />
        <span className="duration">{video.duration}</span>
      </div>

      <div className="video-info">
        <img className="avatar" src={video.avatar} alt="" />

        <div>
          <h3 onClick={() => navigate(`/watch/${video.id}`)}>
            {video.title}
          </h3>

          <p>{video.channel}</p>
          <p>{video.views} • {video.time}</p>

          <div className="video-actions">
            <button onClick={() => toggleLike(video.id)}>
              {isLiked ? "❤️ Liked" : "🤍 Like"}
            </button>

            <button onClick={() => toggleWatchLater(video.id)}>
              {isSaved ? "✓ Saved" : "＋ Watch Later"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;