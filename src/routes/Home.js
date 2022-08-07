import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { dbService } from "myBase";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [nweet, setNweet] = useState(""); //트윗내용
  const [nweets, setNweets] = useState([]); //트윗에 대한 정보가 담길 어레이
  const getNweets = async () => {
    //처음에 트윗 가져오는 함수
    const q = query(collection(dbService, "nweets"));
    const querySnapshot = await getDocs(q);
    //여기까진 돌아가는데
    console.log(querySnapshot);
    querySnapshot.forEach((docs) => {
      //여기부터 안돌아가네 => docs 안에 아무것도 없어서 forEach가 한번도 안돌아가는거로 추정
      console.log("test"); //=>로그 안찍힘
      const nweetObj = {
        //nweetObj => 트윗 내용
        ...docs.data(), // ES6 spread attribute 기능(전개구문)
        id: docs.id,
      };
      setNweets((prev) => [nweetObj, ...prev]);
    });
    console.log("getNweets running");
  };
  useEffect(() => {
    getNweets();
  }, []); //트윗 가져오기
  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(dbService, "nweet"), {
      nweet: { nweet },
      createdAt: serverTimestamp(),
    });
    getNweets();
    setNweet("");
    console.log("onSubmit");
  };
  const onChange = (event) => {
    setNweet(event.target.value);
  };
  console.log(nweets);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
          value={nweet}
          onChange={onChange}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
          <div>
            <h4>{nweet.nweet}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
