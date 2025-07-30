import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const { shortURL } = await params;

  const client = await clientPromise;
  const db = client.db("minilinks");
  const collection = db.collection("URLs");
  const doc = await collection.findOne({ shortURL: shortURL });

  if (!doc) {
    return redirect("/");
  }

  if (doc.URL) {
    return redirect(doc.URL);
  }
}
