import { Roboto } from "next/font/google";
import React from "react";

import { promises as fs } from "fs";
import ShipmentFilter from "./ShipmentFilter";

const roboto = Roboto({
  subsets: ["latin"],
});

export default async function Index() {
  const file = await fs.readFile(
    process.cwd() + "/public/shipments.json",
    "utf8"
  );

  const shipmentJSON = JSON.parse(file);

  return (
    <div
      className={`flex justify-center items-center h-screen ${roboto.className}`}
    >
      <ShipmentFilter shipmentData={shipmentJSON} />
    </div>
  );
}
