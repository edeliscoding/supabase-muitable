// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";

// export function useEditUser() {
//   const queryClient = useQueryClient();

//   const { mutate: editUser, isLoading: isEditing } = useMutation({
//     mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
//     onSuccess: () => {
//       toast.success("Cabin successfully edited");
//       queryClient.invalidateQueries({ queryKey: ["cabins"] });
//     },
//     // onError: (err) => toast.error(err.message),
//   });

//   return { isEditing, editCabin };
// }
