const cloudinary = require("cloudinary");
cloudinary.v2.config({
  cloud_name: "dusycfart",
  api_key: "619917816984413",
  api_secret: "UIwauw8wytX0AoO2N01fpqLOFH4",
});
exports.generateSignature = async (req, res) => {
  const { public_id } = req.query;
  const signature = await cloudinary.v2.utils.api_sign_request(
    {
      public_id,
      timestamp: Math.floor(new Date().getTime() + 31536000000 / 1000),
    },
    "UIwauw8wytX0AoO2N01fpqLOFH4"
  );

return res.status(200).json({signature});
};
