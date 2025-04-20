import { describe, it, expect, beforeEach } from "vitest";
import { getLockedGifs, toggleLock } from "./lockStorage";

const mockGif = {
  id: "baltic",
  title: "Test Gif",
  username: "tester",
  import_datetime: "2024-01-01",
  images: {
    fixed_height: {
      url: "http://example.com/gif.gif",
      height: "200",
      width: "200",
    },
  },
};

beforeEach(() => {
  localStorage.clear();
});

describe("lockStorage", () => {
  it("should lock a gif", () => {
    toggleLock(mockGif, 2);
    const locked = getLockedGifs();
    expect(locked["baltic"]).toBeDefined();
    expect(locked["baltic"].index).toBe(2);
  });

  it("should unlock a gif", () => {
    toggleLock(mockGif, 2);
    toggleLock(mockGif, 2);
    const locked = getLockedGifs();
    expect(locked["baltic"]).toBeUndefined();
  });
});
