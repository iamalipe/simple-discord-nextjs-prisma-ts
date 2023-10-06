import { NextResponse } from "next/server";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLICKEY || "",
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "",
  privateKey: process.env.IMAGEKIT_PRIVATEKEY || "",
});

export const POST = async () => {
  try {
    const signature = imagekit.getAuthenticationParameters();
    return NextResponse.json({ signature });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
