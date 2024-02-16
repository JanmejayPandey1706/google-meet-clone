import ReactPlayer from "react-player";

const Player = ({ url, muted, playing }) => {
  return (
    <>
      <ReactPlayer url={url} muted={muted} playing={playing} />
    </>
  );
};
export default Player;
