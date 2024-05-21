// //
// "use client";

// import { useGetUser } from "@/app/lib/users/useGetUser";
// import { useUsers } from "@/app/lib/users/useUsers";
// import { getUser } from "@/app/services/queries";
// // import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
// import styles from "@/app/ui/user.module.css";
// import { useQuery } from "@tanstack/react-query";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// type userQuery = {
//   user: any;
//   error: null;
// };

// export default function User({ params }) {
//   const { id } = params;

//   const { data, error, isLoading } = useQuery({
//     queryKey: ["user", id],
//     queryFn: () => getUser(id),
//   });

//   console.log(data);

//   //   const { username, email, firstName, lastName, phone } = data;
//   const { register, handleSubmit, reset, getValues, formState } = useForm({
//     // defaultValues: isEditSession ? editValues : {},
//     defaultValues: {},
//   });

//   if (isLoading) return <div>Is Loading Users</div>;
//   return (
//     <div className={styles.container}>
//       <div className={styles.infoContainer}>
//         {/* <div className={styles.imgContainer}>
//           <Image src={user.img || "/noavatar.png"} alt="" fill />
//         </div> */}
//         {/* {user.username} */}
//       </div>
//       <div className={styles.formContainer}>
//         {/* <form action={updateUser} className={styles.form}> */}
//         <form className={styles.form}>
//           {/* <input type="hidden" name="id" value={user.id} /> */}

//           <label>Username</label>
//           <input
//             type="text"
//             name="username"
//             // placeholder={username}
//             value={data?.username}
//           />
//           <label>Email</label>
//           {/* <input type="email" name="email" placeholder={user.email} /> */}
//           <label>First Name</label>
//           {/* <input type="text" name="username" placeholder={user.firstName} /> */}
//           <label>Last Name</label>
//           {/* <input type="text" name="username" placeholder={user.lastName} /> */}
//           <label>Phone</label>
//           {/* <input type="text" name="phone" placeholder={user.phone} /> */}

//           {/* <label>Address</label>
//           <textarea type="text" name="address" placeholder={user.address} /> */}
//           {/* <label>Is Admin?</label>
//           <select name="isAdmin" id="isAdmin">
//             <option value={true} selected={user.isAdmin}>
//               Yes
//             </option>
//             <option value={false} selected={!user.isAdmin}>
//               No
//             </option>
//           </select>
//           <label>Is Active?</label>
//           <select name="isActive" id="isActive">
//             <option value={true} selected={user.isActive}>
//               Yes
//             </option>
//             <option value={false} selected={!user.isActive}>
//               No
//             </option>
//           </select> */}
//           <button>Update</button>
//         </form>
//       </div>
//     </div>
//   );
// }
