const { PHASE_PRODUCTION_SERVER } = process.env.NODE_ENV === 'development'? {}
: !process.env.NOW_REGION ? require('next/constants') : require('next-server/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      /* production only config */
    };
  }

  const withImages = require('next-images')

  return withImages();
};
