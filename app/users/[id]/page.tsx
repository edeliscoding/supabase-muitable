// import { updateUser } from "@/app/lib/actions";
// import { fetchUser } from "@/app/lib/data";
import { editUser } from "@/app/services/mutations";
import { getUser } from "@/app/services/queries";
import styles from "@/app/ui/user.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const user = await getUser(id);
  console.log(user);

  return (
    <div className={styles.container}>
      {/* <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.image || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div> */}
      <div className={styles.formContainer}>
        {/* <form action={updateUser} className={styles.form}> */}
        <form className={styles.form} action={editUser}>
          <input
            className="text-black"
            type="hidden"
            name="id"
            value={user.data.id}
          />
          <label>Username</label>
          <input
            className="text-black"
            type="text"
            name="username"
            placeholder={user.data.username}
          />
          <label>Email</label>
          <input
            className="text-black"
            type="email"
            name="email"
            placeholder={user.data.email}
          />
          <label>First Name</label>
          <input
            className="text-black"
            type="text"
            name="firstName"
            placeholder={user.data.firstName}
          />
          <label>Last Name</label>
          <input
            className="text-black"
            type="text"
            name="firstName"
            placeholder={user.data.firstName}
          />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.data.phone} />
          {/* <label>Address</label> */}
          {/* <textarea type="text" name="address" placeholder={user.address} /> */}
          {/* <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select> */}
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
