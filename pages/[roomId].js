import Player from "@/component/Player";
import { useSocket } from "@/context/socket";
import useMediaStream from "@/hooks/useMediaStream";
import usePeer from "@/hooks/usePeer";

const Room = () => {
  const socket = useSocket();
  const { peer, myId } = usePeer();
  const { stream } = useMediaStream();
  return (
    <>
      <Player url={stream} muted playing playerId={myId} />
    </>
  );
};

export default Room;
