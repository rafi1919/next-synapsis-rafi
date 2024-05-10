import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDeleteUserData, useUpdateUserData } from "@/hooks";
import { FaUser } from "react-icons/fa";
import Button from "@/templates/components/Button";
import Layout from "@/templates/components/Layout";

interface DetailProps {
  userId?: any;
  name: string;
  email: string;
  gender: string;
  status: string;
}

const UserDetailView: React.FC<DetailProps> = ({
  userId,
  email,
  name,
  gender,
  status,
}) => {
  const router = useRouter();
  const { loading: deleteLoading, deleteUserData } = useDeleteUserData();
  const { loading: updateLoading, updateUserData } = useUpdateUserData();

  const [updateUser, setUpdateUser] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedGender, setUpdatedGender] = useState(gender);
  const [updatedStatus, setUpdatedStatus] = useState(status);

  const handleDelete = async (userId: any) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await deleteUserData(userId);
      router.push("/User");
    }
  };

  const handleUpdate = () => {
    setUpdateUser(!updateUser);
  };

  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUserData(
      userId,
      updatedName,
      updatedEmail,
      updatedGender,
      updatedStatus
    );
    setUpdateUser(false);
    router.push("/User");
  };

  return (
    <Layout heading="User's info">
      <div className="rounded-md p-3 border-[1px] w-[160px] h-[160px]  text-black bg-green-500 flex items-center justify-center">
        <FaUser className="text-[60px]" />
      </div>
      <table>
        <tbody>
          <tr>
            <td className="font-semibold">
              <p className="text-[14px] p-2 m-2">Name</p>
              <p className="text-[14px] p-2 m-2">Email</p>
              <p className="text-[14px] p-2 m-2">Gender</p>
              <p className="text-[14px] p-2 m-2">Status</p>
              {updateUser ? (
                <p className="text-[14px] p-2 my-16 opacity-0">Status</p>
              ) : null}
            </td>
            <td>
              <form onSubmit={handleUpdateUser}>
                <div>
                  <input
                    className="w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2"
                    placeholder="Name"
                    value={updateUser ? updatedName : name}
                    onChange={(e) => setUpdatedName(e.target.value)}
                    readOnly={!updateUser}
                  />
                </div>
                <div>
                  <input
                    className="w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2"
                    placeholder="Email"
                    value={updateUser ? updatedEmail : email}
                    onChange={(e) => setUpdatedEmail(e.target.value)}
                    readOnly={!updateUser}
                  />
                </div>
                <div>
                  <select
                    className="w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2"
                    value={updateUser ? updatedGender : gender}
                    onChange={(e) => setUpdatedGender(e.target.value)}
                    disabled={!updateUser}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <select
                    className="w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2"
                    value={updateUser ? updatedStatus : status}
                    onChange={(e) => setUpdatedStatus(e.target.value)}
                    disabled={!updateUser}
                  >
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                {updateUser && (
                  <div>
                    <Button text="Update User" type="submit" />
                    <Button text="Cancel" onClick={handleUpdate} />
                  </div>
                )}
              </form>
            </td>
          </tr>
        </tbody>
      </table>
      {!updateUser && (
        <>
          <Button onClick={() => handleDelete(userId)} text="Delete" />
          <Button onClick={handleUpdate} text="Update" />
        </>
      )}
    </Layout>
  );
};

export default UserDetailView;
