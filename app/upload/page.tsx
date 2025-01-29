"use client";

import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadImage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <div>
      <CldUploadWidget
        uploadPreset="loreme"
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
        onSuccess={(result, { widget }) => {
          console.log(result);

          const info = result.info as CloudinaryResult;
          if (result.event === "success") {
            setPublicId(info.public_id);
          }
        }}
      >
        {({ open }) => (
          <button
            className="bg-blue-500 rounded py-1 px-5 text-white font-bold font-mono"
            onClick={() => open()}
          >
            Upload
          </button>
        )}
      </CldUploadWidget>

      {publicId && (
        <CldImage
          width="300"
          height="200"
          src={publicId}
          alt="Uploaded Image"
        />
      )}
    </div>
  );
};

export default UploadImage;
