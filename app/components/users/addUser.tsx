"use client";
import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useCreateUser } from "@/app/lib/users/useCreateUser";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FieldErrors, useForm, useFieldArray } from "react-hook-form";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  // TEST THE API

  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch(`http://localhost:8800/api/${props.slug}s`, {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: 111,
  //         img: "",
  //         lastName: "Hello",
  //         firstName: "Test",
  //         email: "testme@gmail.com",
  //         phone: "123 456 789",
  //         createdAt: "01.02.2023",
  //         verified: true,
  //       }),
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${props.slug}s`]);
  //   },
  // });

  // type FormValues = {
  //   // img: string;
  //   username: string;
  //   firstName: string;
  //   lastName: string;
  //   email: string;
  //   phone: string;
  // };
  type FormValues = {
    [key: string]: any; // This can be more specific if you know the exact structure
  };

  const form = useForm<FormValues>({
    defaultValues: {
      // const response = await fetch(
      //   "https://jsonplaceholder.typicode.com/users/1"
      // );
      // const data = await response.json();
      // img: "",
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    mode: "onTouched",
  });
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
    trigger,
  } = form;

  const { isCreating, AddUser } = useCreateUser();

  const AddUserSubmit = (data: FormValues) => {
    // e.preventDefault();
    // console.log(data);
    AddUser(data);
    //add new item
    // mutation.mutate();
    props.setOpen(false);
  };
  return (
    <div className="add mt-4">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit(AddUserSubmit)}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input
                  // type={column.type}
                  placeholder={column.field}
                  // name={column.field}
                  {...register(column.field)}
                />
              </div>
            ))}
          <button className="text-zinc-800 bg-white">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
