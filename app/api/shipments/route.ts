import { promises as fs } from "fs";

export async function GET() {
    const file = await fs.readFile(
    process.cwd() + "/public/shipments.json", "utf8");
    return new Response(file, {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}