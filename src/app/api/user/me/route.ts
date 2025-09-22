// src/app/api/user/me/route.ts
import { initialUser } from "@/lib/initial-user";
import { currentUser } from "@clerk/nextjs/server";

export async function GET() {
  try {
  
    const profile = await initialUser();
    return Response.json(profile);
  } catch (err){
    console.log("me error", err)
    return new Response("Unauthorized", { status: 401 });
  }
}