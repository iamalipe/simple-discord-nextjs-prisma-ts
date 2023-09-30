import axios from "axios";

const IMAGEKIT_UPLOAD_URL = "https://upload.imagekit.io/api/v1/files/upload";

const allowedFileExtensions = [
  // Images
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "tiff",
  "svg",
  // Videos
  // "mp4",
  // "avi",
  // "mov",
  // "mkv",
  // "wmv",
  // "flv",
  // "webm",
  // Audio
  // "mp3",
  // "wav",
  // "ogg",
  // "aac",
  // "flac",
];

interface ImageKitUploadParameters {
  file: File;
  fileName: string;
  folder?: string;
  overwriteFile?: boolean;
}

export const imageKitUpload = async (data: ImageKitUploadParameters) => {
  const { file, fileName, folder, overwriteFile } = data;

  const fileNameSplit = file.name.split(".");
  const fileExtension = fileNameSplit[fileNameSplit.length - 1].toLowerCase();

  if (!allowedFileExtensions.includes(fileExtension)) {
    throw new Error(`${fileExtension} this type of file not allowed`);
  }

  const res = await axios.post("/api/image-kit");
  if (res.status !== 200) throw new Error(`/api/image-kit not working.`);
  const signature = res.data.signature;
  const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLICKEY || "";

  const payload = new FormData();
  payload.append("file", file);
  payload.append("fileName", `${fileName}.${fileExtension}`);
  payload.append("signature", signature.signature);
  payload.append("publicKey", publicKey);
  payload.append("token", signature.token);
  payload.append("expire", signature.expire);
  payload.append("folder", "simple-discord-clone/" + folder);
  payload.append("overwriteFile", overwriteFile ? "true" : "false");
  payload.append("useUniqueFileName", overwriteFile ? "false" : "true");

  const uploadRes = await axios.post(IMAGEKIT_UPLOAD_URL, payload);

  const returnData = {
    fileId: uploadRes.data.fileId as string,
    filePath: uploadRes.data.filePath as string,
    isPrivateFile: uploadRes.data.isPrivateFile as boolean,
    name: uploadRes.data.name as string,
    size: uploadRes.data.size as number,
    thumbnailUrl: uploadRes.data.thumbnailUrl as string,
    url: uploadRes.data.url as string,
    fileType: uploadRes.data.fileType as string,
    height: uploadRes.data.height,
    width: uploadRes.data.width,
  };

  return returnData;
};
