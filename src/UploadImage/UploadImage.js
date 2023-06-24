import React from "react";

const UploadImage = (props) => {
  const { image } = props;
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "reciept-tracker");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dzqzqj3xw/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
  };

  return (
    <div className="">
      <form class="flex flex-col gap-4 items-center">
        <div class="shrink-0">
          <label for="imageFile">Upload a photo of your reciept</label>
        </div>
        <div>
          <input
            type="file"
            id="imageFile"
            capture="environment"
            accept="image/*"
            class="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
          />
        </div>
      </form>
    </div>
  );
};

export default UploadImage;
