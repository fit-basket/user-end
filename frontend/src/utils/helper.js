// screenSizeHelper.js
function getScreenSize() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 640) {
    return "extraSmall";
  } else if (screenWidth < 768) {
    return "small";
  } else if (screenWidth < 1024) {
    return "medium";
  } else if (screenWidth < 1280) {
    return "large";
  } else {
    return "extraLarge";
  }
}

export { getScreenSize };
