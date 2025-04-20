import { useCallback, useEffect, useState } from "react";
import { Gifgrid, Heading, Button } from "@/components";
import { createSpacebarHandler, generateRefreshToken } from "./home.deps";
import "./Home.scss";

const Home = () => {
  const [refreshToken, setRefreshToken] = useState(generateRefreshToken());

  const handleRefresh = useCallback(() => {
    setRefreshToken(generateRefreshToken());
  }, []);

  useEffect(() => {
    const handler = createSpacebarHandler(handleRefresh);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleRefresh]);

  return (
    <div className="home-root">
      <div className="home-container">
        <Heading />
        <Gifgrid refreshToken={refreshToken} />
        <Button handleRefresh={handleRefresh}>
          Hit here to refresh gifs or press space
        </Button>
      </div>
    </div>
  );
};

export default Home;
