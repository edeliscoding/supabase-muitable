import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
// import Link from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { useDeleteUser } from "@/app/lib/users/useDeleteUser";
type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  // TEST THE API

  const queryClient = useQueryClient();
  // const mutation = useMutation({
  //   mutationFn: (id: number) => {
  //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
  //       method: "delete",
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${props.slug}`]);
  //   },
  // });
  const { removeUser, isDeleting } = useDeleteUser();

  const handleDelete = (id: number) => {
    //delete the item
    removeUser(id);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          {/* <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link> */}
          <Link href={`/${props.slug}/${params.row.id}`}>
            <Image src="/view.svg" alt="View button" width={200} height={200} />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <Image
              src="/delete.svg"
              alt="Delete button"
              width={200}
              height={200}
            />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
