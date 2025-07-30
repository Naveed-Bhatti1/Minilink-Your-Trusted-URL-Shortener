import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  const body = await req.json();
  const client = await clientPromise;
  const db = client.db("minilinks");
  const collection = db.collection("URLs");

  const doc = await collection.findOne({ shortURL: body.shortURL });
  if (doc) {
    return Response.json({
      message: "Short URL already exists",
      shortURL: body.shortURL,
    });
  }

  const result = await collection.insertOne({
    URL: body.URL,
    shortURL: body.shortURL,
  });

  return Response.json({
    message: "URL shortened successfully",
    shortURL: body.shortURL,
  });
}
