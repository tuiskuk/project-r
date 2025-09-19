import { currentUser } from "@clerk/nextjs/server";
// Update the import path below if your db file is located elsewhere
import { db } from "./prisma";
import { User } from "@/generated/prisma";

export const initialUser = async (): Promise<User> => {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    throw new Error("Not authenticated");
  }

  const user = await db.user.findUnique({
    where: { userId: clerkUser.id },
  });

  if (user) {
    return user;
  }

  const newUser = await db.user.create({
    data: {
      userId: clerkUser.id,
      name: clerkUser.firstName || clerkUser.emailAddresses[0].emailAddress,
      email: clerkUser.emailAddresses[0].emailAddress,
      bio: "",
      phone: "",
      location: "",
      birthdate: null,
      gender: "",
      website: "",
      facebook:  "",
      instagram:  "",
      twitter:  "",
      linkedin: "",
      interests:  [],
      languages:  [],
      isPublic:  true,
      lastActiveAt: null
    },
  });

  return newUser;
};
