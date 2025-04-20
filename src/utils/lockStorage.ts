import { GifData, LockedGifMap } from "@/components/gifGrid/gif.types";

const STORAGE_KEY = "lockedGifs";

export const getLockedGifs = (): LockedGifMap => {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
};

export const toggleLock = (gif: GifData, index: number) => {
  const current: LockedGifMap = getLockedGifs();

  if (current[gif.id]) {
    delete current[gif.id];
  } else {
    current[gif.id] = { gif, index };
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
};
