import { useSocket } from "@/context/socket";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const usePeer = () => {
  const socket = useSocket();
  const roomId = useRouter().query.roomId;
  console.log(roomId, "roomId");
  const [peer, setPeer] = useState(null);
  const [myId, setMyId] = useState("");
  const isPeerSet = useRef(false);
  useEffect(() => {
    if (isPeerSet.current || !roomId || !socket) {
      (async function initPeer() {
        const myPeer = new (await import("peerjs")).default();
        setPeer(myPeer);
        myPeer.on("open", (id) => {
          console.log(`my peer id is ${id}`);
          setMyId(id);
          socket.emit("join-room", roomId, id);
        });
      })();
    } else {
      isPeerSet.current = true;
    }
  }, [roomId, socket]);

  return { peer, myId };
};

export default usePeer;
