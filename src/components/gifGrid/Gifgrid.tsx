import { useMemo, useState } from "react";
import { useGetTrendingGifsQuery } from "@/state/giphyList/giphyApiSlice";
import { getLockedGifs, toggleLock } from "@/utils/lockStorage";
import { spinnerIcon } from "@/assets";
import { buildGrid } from "./gif.deps";
import { GifData } from "./gif.types";
import GifCard from "./GifCard";
import "./GifGrid.scss";

const GifGrid = ({ refreshToken }: { refreshToken: number }) => {
  const [locked, setLocked] = useState(getLockedGifs());
  const { data, error, isLoading } = useGetTrendingGifsQuery(refreshToken, {
    refetchOnMountOrArgChange: true,
  });

  const handleLockToggle = (gif: GifData, index: number) => {
    toggleLock(gif, index);
    setLocked(getLockedGifs());
  };

  const grid = useMemo(
    () => buildGrid(data?.data || [], locked),
    [data, locked]
  );

  if (error) return <p>Error loading GIFs</p>;

  return (
    <div className="gif-grid">
      {isLoading ? (
        <img src={spinnerIcon} alt="Loading spinner" className="spinner" />
      ) : (
        grid.map((gif, i) =>
          gif ? (
            <GifCard
              key={gif.id}
              gif={gif}
              index={i}
              isLocked={!!locked[gif.id]}
              onToggle={() => handleLockToggle(gif, i)}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default GifGrid;
