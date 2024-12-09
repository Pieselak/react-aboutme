import { useEffect } from "react";
import { useParams } from "react-router-dom";
import setTitle from "../utilities/setTitle";
import Copyrights from "../components/Copyrights";

const LinksPage = () => {
  const { link } = useParams();
  const links: { [key: string]: string } = {
    github: "https://github.com/pieselak",
    steam: "https://steamcommunity.com/id/pieselak",
    discord: "https://discord.gg/TJdXKdkU2w",
    youtube: "https://www.youtube.com/@pieselak",
    tiktok: "https://www.tiktok.com/@pieselak",
    twitch: "https://www.twitch.tv/mrpieselak",
  };

  useEffect(() => {
    setTitle("Links");
    if (link && links[link.toLowerCase()]) {
      window.location.href = links[link.toLowerCase()];
    }
  });

  return (
    <>
      {link && links[link.toLowerCase()] ? (
        <div className="Profile_Page">
          <h1>Please wait. Redirecting...</h1>
          <a href={links[link]}>
            Click here if you are not automatically redirected
          </a>
        </div>
      ) : (
        <div className="Profile_Page">
          <h1>Link not found</h1>
          <a href="/">Return to homepage</a>
        </div>
      )}

      <Copyrights />
    </>
  );
};

export default LinksPage;
