import { useEffect, useRef, useState } from "react";

const usePeer = () => {
  const [peer, setPeer] = useState(null);
  const [myId, setMyId] = useState("");
  const isPeerSet = useRef(false);
  useEffect(() => {
    if (isPeerSet.current) {
      (async function initPeer() {
        const myPeer = new (await import("peerjs")).default();
        setPeer(myPeer);

        myPeer.on("open", (id) => {
          console.log(`my peer id is ${id}`);
          setMyId(id);
        });
      })();
    } else {
      isPeerSet.current = true;
    }
  }, []);

  return { peer, myId };
};

export default usePeer;
