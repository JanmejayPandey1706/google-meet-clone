import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useSocket } from "@/context/socket";
import usePeer from "@/hooks/usePeer";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import styles from "@/styles/home.module.css";

export default function Home() {
  // const socket = useSocket();
  // usePeer();
  // useEffect(() => {k
  //   socket?.on("connect", () => {
  //     console.log(socket.id);
  //   });
  // }, [socket]);
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  const CreateAndJoin = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`);
  };
  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`);
    else {
      alert("Please enter a valid room id ");
    }
  };

  return (
    <div className={styles.homeContainer}>
      <h1>Google Meet Clone</h1>
      <div className={styles.enterRoom}>
        <input
          placeholder="Enter Room Id"
          value={roomId}
          onChange={(e) => setRoomId(e?.target?.value)}
        />
        <button onClick={joinRoom}>Join Button</button>
      </div>
      <span className={styles.separatorText}>
        -------------------- OR ---------------------
      </span>
      <button onClick={CreateAndJoin}>Create a new room</button>
    </div>
  );
}
