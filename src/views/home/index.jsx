// LIBs
import { useState } from "react";

// CONTAINERs
import Posts from "../../containers/home/Posts";
import More from "../../containers/home/More";
import Comments from "../../containers/home/Comments";
import SendMessage from "../../forms/home/sendMessage";
import SendPost from "../../forms/home/sendPost";

const posts = [
  {
    id: Math.random(),
    image: "https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg",
    text: "Esse mundo é incrível!",
    liked: false,
    user: {
      id: Math.random(),
      image: "https://images6.alphacoders.com/116/1167538.jpg",
      name: "julinbr_03",
    },
    comments: [
      {
        id: Math.random(),
        image: "https://images.alphacoders.com/270/270241.jpg",
        name: "jurur",
        comment: "Que wallpaper incrível Julin!",
      },
      {
        id: Math.random(),
        image: "https://pm1.narvii.com/6827/97fc79279650df2322ed0f43c6aef3bc592357b0v2_hq.jpg",
        name: "luca_gameplay",
        comment: "Já imaginou...",
      },
    ],
  },
  {
    id: Math.random(),
    image: "https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg",
    text: "Esse mundo é incrível!",
    liked: true,
    user: {
      id: Math.random(),
      image: "https://images6.alphacoders.com/116/1167538.jpg",
      name: "julinbr_03",
    },
    comments: [
      {
        id: Math.random(),
        image: "https://images.alphacoders.com/270/270241.jpg",
        name: "jurur",
        comment: "Que wallpaper incrível Julin!",
      },
      {
        id: Math.random(),
        image: "https://pm1.narvii.com/6827/97fc79279650df2322ed0f43c6aef3bc592357b0v2_hq.jpg",
        name: "luca_gameplay",
        comment: "Já imaginou...",
      },
    ],
  },
  {
    id: Math.random(),
    image: "https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg",
    liked: true,
    user: {
      id: Math.random(),
      image: "https://images6.alphacoders.com/116/1167538.jpg",
      name: "julinbr_03",
    },
    comments: [
      {
        id: Math.random(),
        image: "https://images.alphacoders.com/270/270241.jpg",
        name: "jurur",
        comment: "Que wallpaper incrível Julin!",
      },
      {
        id: Math.random(),
        image: "https://pm1.narvii.com/6827/97fc79279650df2322ed0f43c6aef3bc592357b0v2_hq.jpg",
        name: "luca_gameplay",
        comment: "Já imaginou...",
      },
    ],
  },
];

function Home(props) {
  const [ postComments, setPostComments ] = useState(null);

  return (
    <main className="HomeView">
      <div className="HomeView__container">
        <Posts 
          data={posts} 
          comments={postComments}
          onComment={setPostComments}
          commentElement={<Comments data={postComments}><SendMessage /></Comments>}
          formElement={<SendPost />}
        />
        <More />
      </div>
    </main>
  )
}

export default Home;