import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=100077498589095" },
  { Social: <FaTwitter />, link: "https://twitter.com/dianariosram" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/d.rixs/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/dianariosram/" },
  { Social: <FaPinterestP />, link: "https://www.pinterest.com.mx/diaanaaxs/" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
