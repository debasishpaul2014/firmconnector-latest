import React, { useState, useEffect } from "react";

const About = (props) => {
  const { profileDetails } = props;
  const [profileBio, setProfileBio] = useState("");

  useEffect(() => {
    if (profileDetails) {
      setProfileBio(profileDetails.profile_bio);
    }
  }, [profileDetails]);

  return (
    <div className="d-block">
      <span className="p-wrap">{profileBio}</span>
    </div>
  );
};

export default About;
