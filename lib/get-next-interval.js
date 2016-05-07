module.exports = (base = 240000, variation = 120000) => {
  return Math.floor(Math.random() * variation + base);
}
