"use server";

export async function formAction(data: FormData): Promise<void> {
  const payload = {
    name: data.get("name") as string,
    email: data.get("email") as string,
    tel: data.get("tel") as string,
  };

  console.log(payload);
}
