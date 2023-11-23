/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/User",
        destination: "https://6555c3a784b36e3a431e45f1.mockapi.io/User",
      },
    ];
  };
  return { rewrites };
};
