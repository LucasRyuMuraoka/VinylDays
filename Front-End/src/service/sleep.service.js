export const appTimeout = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
