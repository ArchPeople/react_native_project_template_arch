export const themeDeviceDimension = {
  // Screen dimensions imitations (Add more if needed)
  phoneScreenWidth: 360.0,
  phoneScreenHeight: 640.0,
  tabletScreenWidth: 600.0,
  tabletScreenHeight: 1000.0,
  // Default screen dimensions
  get defaultScreenWidth() {
    return this.phoneScreenWidth; // Change this with any width from above, it will affect dynamic UI
  },
  get defaultScreenHeight() {
    return this.phoneScreenHeight; // Change this with any height from above, it will affect dynamic UI
  },
};
