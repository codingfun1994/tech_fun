import { lockOpenIcon, lockClosedIcon } from "@/assets";
import { GifCardProps } from "./gif.types";

const GifCard = ({ gif, isLocked, onToggle }: GifCardProps) => {
  const formattedDateTime = gif.import_datetime?.split(" ")[0];
  const gifName = gif.username?.toLowerCase() || "giphy";

  return (
    <div className="gif-wrapper" key={gif.id}>
      <div className="gif-item" onClick={onToggle}>
        <img
          src={gif.images.fixed_height.url}
          alt={gif.title}
          className="gif-image"
        />
        <img
          src={isLocked ? lockClosedIcon : lockOpenIcon}
          alt="Lock icon"
          className="lock-icon"
        />
      </div>
      <div className="gif-meta">
        <p className="gif-date">{formattedDateTime}</p>
        <p className="gif-tags">#{gifName}</p>
      </div>
    </div>
  );
};

export default GifCard;
