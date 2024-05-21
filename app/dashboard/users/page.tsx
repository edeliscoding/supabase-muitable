"use client";

import DataTable from "@/app/components/dataTable/dataTable";
import Add from "@/app/components/users/addUser";
import { useUsers } from "@/app/lib/users/useUsers";
import { GridColDef } from "@mui/x-data-grid";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.image || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "username",
    type: "string",
    headerName: "Username",
    width: 150,
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "created_at",
    headerName: "Created At",
    width: 200,
    renderCell: (params) => {
      // Extract the date value
      const dateValue = params.value;

      // Format the date using date-fns
      const formattedDate = format(new Date(dateValue), "PPpp"); // You can customize the format string as needed

      // Return the formatted date
      return <span>{formattedDate}</span>;
    },
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

export default function Users() {
  const [open, setOpen] = useState(false);

  // TEST THE API

  //   const { isLoading, data } = useQuery({
  //     queryKey: ["allusers"],
  //     queryFn: () =>
  //       fetch("http://localhost:8800/api/users").then((res) => res.json()),
  //   });

  const { isLoading, error, users } = useUsers();

  const userRows = users ?? [];

  return (
    <div className="users p-4">
      <div className="info">
        {/* <h1>Users</h1> */}
        <button
          onClick={() => setOpen(true)}
          className="p-4 bg-zinc-700 text-white rounded-xl mb-4"
        >
          Add New User
        </button>
      </div>
      {/* <DataTable slug="users" columns={columns} rows={userRows} /> */}

      {/* TEST THE API */}

      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={userRows} />
      )}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
}
