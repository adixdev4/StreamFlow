import { useParams } from "react-router-dom";
import videos from "../data/videos";

function Watch() {
  const { id } = useParams();

  const video = videos.find(
    (item) => item.id.toString() === id
  );

  if (!video) {
    return <h2>Video not found!</h2>;
  }

  return (
    <div className="watch-page">

      <div className="video-player">
        <video controls autoPlay>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support video playback.
        </video>
      </div>

      <h2>{video.title}</h2>

      <div className="watch-channel">
        <img src={video.avatar} alt={video.channel} />

        <div>
          <h3>{video.channel}</h3>
          <p>{video.views}</p>
        </div>

        <button>Subscribe</button>
      </div>

      <div className="video-description">
        <p>{video.views} • {video.time}</p>
        <p>Enjoy watching this video on StreamFlow!</p>
      </div>

    </div>
  );
}

export default Watch;