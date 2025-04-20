export const generateRefreshToken = () => Date.now();

export const createSpacebarHandler = (refreshCallback: () => void) => {
  return (e: KeyboardEvent) => {
    if (e.code === "Space") {
      e.preventDefault();
      refreshCallback();
    }
  };
};
