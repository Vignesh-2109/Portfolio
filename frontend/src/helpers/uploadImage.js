export const uploadImage = async (selectedImg) => {
  const formData = new FormData();
  formData.append("file", selectedImg);
  formData.append("upload_preset", "Portfolio");
  formData.append("api_key", "619917816984413");
  // upload image to cloudinary
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dusycfart/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await res.json();
  if (!data) {
    return console.log("Error occured while uploading image");
  }
  const imageData = {
    secureUrl: data.secure_url,
    publicId: data.public_id,
    deleteToken: data.delete_token,
  };
  return imageData;
};
