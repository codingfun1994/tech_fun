export type GifImageVariant = {
  url: string;
  height: string;
  width: string;
};

export type GifData = {
  id: string;
  title: string;
  username: string;
  import_datetime: string;
  images: {
    fixed_height: {
      url: string;
      height: string;
      width: string;
    };
  };
};

export type LockedGifMap = Record<
  string,
  {
    gif: GifData;
    index: number;
  }
>;

export type GifCardProps = {
  gif: GifData;
  isLocked: boolean;
  onToggle: () => void;
  index: number;
};
