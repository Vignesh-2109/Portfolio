export const deleteImage = async (public_id, signature) => {
  const deleted = await fetch(
    "https://api.cloudinary.com/v1_1/dusycfart/image/destroy",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        public_id:public_id,
        api_key: "619917816984413",
        api_secret: "UIwauw8wytX0AoO2N01fpqLOFH4",
        signature,
        timestamp: Math.floor(new Date().getTime() + 31536000000 / 1000),
      }),
    }
  );
  const data = await deleted.json();
  return data;
};


