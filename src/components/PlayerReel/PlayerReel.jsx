import "./PlayerReel.scss";
import { useState } from "react";

const PlayerReel = (props) => {
  const [playerInfo, setPlayerInfo] = useState(props.player);

  const handleReelClick = (event) => {
    props.setPageState("infoSmall")
  }

  return (
    <section className="reel">
      <button onClick={handleReelClick} className="reel__placeholderBack">Back</button>
      <div className="reel__bar">
        <div
          className="reel__progress"
          style={{ backgroundColor: playerInfo.mainColor }}
        ></div>
      </div>
      <div>
        <video className="reel__reelPlaceholder" src="https://s3-figma-videos-production-sig.figma.com/video/1195422589020468886/TEAM/b3d4/e2ce/-aa37-4a03-a737-8f20fd35a6f1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CzNs8S~G6mNgu6gqKes0sHTttvW1Zt5lWvXgxjB92tz0Js9lla38QGc0qILbWfSKtzQFOFTkzcCu~Jn87aEietADz~fqL1Bvb2Q6kUwzRpd5rMTPzQ5vDNt4MQYXDd26JQVKqr~6ZmpLJoH5YMBuhL7fO5YfjJkFH0eSSHQGPKGC3AhoqtIxZ6EIyELg~7o-4YaI5mJun2DAb-KxNRIG-O3NxsUK0hIFxRQTncs~jiD3qFSqeh6kFt-P652FJurg~HVQOSPgA4lhOFnU0BgkpuJYD-3h9q-xFpaHMHx8DKBQCOIsHUXefWG7dse80ReU~8vzNK9T5iu-HQLEOSdDmA__"></video>
      </div>
    </section>
  );
};

export default PlayerReel;
