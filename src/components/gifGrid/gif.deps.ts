import { GifData, LockedGifMap } from "./gif.types";

export const buildGrid = (
  data: GifData[],
  lockedMap: LockedGifMap,
  gridSize = 12
): (GifData | null)[] => {
  const result = Array<GifData | null>(gridSize).fill(null);
  const sortedData = [...data].sort(
    (a, b) =>
      new Date(b.import_datetime).getTime() -
      new Date(a.import_datetime).getTime()
  );

  Object.values(lockedMap).forEach(({ gif, index }) => {
    if (index < gridSize) result[index] = gif;
  });

  const nonLocked = sortedData.filter((gif) => !lockedMap[gif.id]);
  result.forEach((slot, idx) => {
    if (!slot) {
      const next = nonLocked.shift();
      if (next) result[idx] = next;
    }
  });

  return result;
};
