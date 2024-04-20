import Spline from "@splinetool/react-spline";
import Typography from "@mui/material/Typography";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      let response = await fetch("http://localhost:8888", {
        method: "get",
      });
      let skills = await response.json();
      console.log(skills);
      setSkills(skills);
    };
    getSkills();
  }, []);

  return (
    <>
      <Typography variant="h1"> Hi, My name is Sion</Typography>
      <Spline scene="https://prod.spline.design/06H2NUvRUWoizzJq/scene.splinecode" />
      <div>
        My Skills:{" "}
        {skills.map((skill: any) => (
          <Typography>{skill.skillName}</Typography>
        ))}
      </div>
    </>
  );
}

export default App;
