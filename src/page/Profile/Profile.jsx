import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import userProfile from "../../assets/user.png";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-[80vh] grid place-items-center p-4">
      {/* <table className="border">
        <tr className="border">
          <td className="border px-5 text-xl">Photo</td>
          <td className="border p-2 flex justify-center">
            <img src={user?.photoURL} alt="" />
          </td>
        </tr>
        <tr className="border">
          <td className="border px-5 text-xl">Name</td>
          <td className="border p-2">
            <p>{user?.displayName}</p>
          </td>
        </tr>
        <tr className="border">
          <td className="border px-5 text-xl">Email</td>
          <td className="border p-2">
            <p>{user?.email}</p>
          </td>
        </tr>
      </table> */}

      <div className="bg-[#0095bd] w-full  py-10 md:py-14 md:w-[550px] rounded-xl shadow-xl md:rounded-2xl md:shadow-2xl mx-auto flex flex-col justify-center items-center">
        <img
          className="w-[150px] h-[150px] border-4 border-white rounded-full"
          src={user?.photoURL || userProfile}
          alt=""
        />
        <h2 className="text-xl md:text-3xl pt-5 font-bold text-white">
          {user?.displayName}
        </h2>
        <p className="text-base md:text-lg text-white pt-2">{user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
