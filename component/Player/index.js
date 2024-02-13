import ReactPlayer from "react-player";

const Player = ({ playerId, url, muted, playing }) => {
  return (
    <>
      <ReactPlayer
        playerId={playerId}
        url={url}
        muted={muted}
        playing={playing}
      />
    </>
  );
};
export default Player;
