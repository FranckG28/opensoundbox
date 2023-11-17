import { revalidatePath } from "next/cache";

export async function GET(req: Request, res: Response) {
  try {
    revalidatePath("/");
    return Response.json({ message: "Revalidation successful" });
  } catch (error) {
    console.error("Revalidation error : ", error);
    return Response.json({ message: "Revalidation error" });
  }
}
