"use client";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { IShipmentData } from "@/types/shipments";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ShipmentFilter({
  shipmentData,
}: {
  shipmentData: IShipmentData[];
}) {
  const [filterByStatus, setFilterByStatus] = useState("");
  const [filteredData, setFilteredData] = useState<IShipmentData[]>([]);
  return (
    <>
      <div>
        <div className="lg:flex mb-6">
          <Label className="mb-2" htmlFor="filterByStatus">
            Filtrar por Status
          </Label>
          <Input
            value={filterByStatus}
            onChange={(e) => {
              setFilterByStatus(e.target.value);
              const filter = shipmentData.filter((item) =>
                item.status.match(e.target.value)
              );
              setFilteredData(filter);
            }}
            name="filterByStatus"
            placeholder="Ingresa un status"
          />
        </div>
        <Table className="md:w-[750px]">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">ID</TableHead>
              <TableHead className="text-center">Destination</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData != undefined && filterByStatus != ""
              ? filteredData.map((item) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell className="text-center">{item.id}</TableCell>
                      <TableCell className="text-center">
                        {item.destination}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.status}
                      </TableCell>
                    </TableRow>
                  );
                })
              : shipmentData.map((item) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell className="text-center">{item.id}</TableCell>
                      <TableCell className="text-center">
                        {item.destination}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.status}
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
