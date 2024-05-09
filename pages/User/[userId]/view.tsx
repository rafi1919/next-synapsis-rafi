import React, { useState } from 'react';
import CardPost from '@/templates/components/CardPost';
import { useRouter } from 'next/router';
import { useDeleteUserData, useUpdateUserData } from '@/hooks';
import {FaUser} from 'react-icons/fa'
import Button from '@/templates/components/Button';
import Layout from '@/templates/components/Layout';

interface detailProps{
    userId?:any
    name: string
    email: string
    gender: string
    status: string
}

const UserDetailView:React.FC<detailProps>=({userId,  email, name, gender, status})=>{
    const router = useRouter()
    const [updateUser, setUpdateUser] = useState(false);
    const [updatedName, setUpdatedName] = useState(name);
    const [updatedEmail, setUpdatedEmail] = useState(email);
    const [updatedGender, setUpdatedGender] = useState(gender);
    const [updatedStatus, setUpdatedStatus] = useState(status);
    
    const { loading: deleteLoading, deleteUserData } = useDeleteUserData();
    const { loading: updateloading, updateUserData } = useUpdateUserData();


    const handleDelete = async (userId:any) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            await deleteUserData(userId);
            router.push('/User')
        }
    };

    const handleUpdate=()=>{
        setUpdateUser(!updateUser)
    }

    const handleUpdateUser=async (e:React.FormEvent) => {
        e.preventDefault();
        await updateUserData(userId, updatedName, updatedEmail, updatedGender, updatedStatus);
        setUpdateUser(false)
        router.push('/User')

    }

    return(
        <Layout heading="User's info">
            <div className="rounded-md p-3 border-[1px] w-[160px] h-[160px]  text-black bg-green-500 flex items-center justify-center">
                <FaUser className='text-[60px]'/>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td className='font-semibold'>
                            <p className='text-[14px] p-2 m-2'>Name</p>
                            <p className='text-[14px] p-2 m-2'>Email</p>
                            <p className='text-[14px] p-2 m-2'>Gender</p>
                            <p className='text-[14px] p-2 m-2'>Status</p>
                            {updateUser ? 
                                <p className='text-[14px] p-2 my-16 opacity-0'>Status</p>

                            :null}

                        </td>
                        <td>
                            {updateUser ? <>
                                
                            <form onSubmit={handleUpdateUser}>
                                <div>
                                <input className="w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2" placeholder="Name" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
                                </div>
                                <div>
                                    <input className="w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2" placeholder="Email" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} />
                                </div>
                                <div>
                                    <input className="w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2" placeholder="Gender" value={updatedGender} onChange={(e) => setUpdatedGender(e.target.value)} />
                                </div>
                                <div>
                                    <input className="w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2" placeholder="Status" value={updatedStatus} onChange={(e) => setUpdatedStatus(e.target.value)} />
                                </div>
                                <Button text='Update User' type="submit" />
                                <Button text='Cancel' onClick={handleUpdate} />

                            </form>
                            </>: <>
                            <div>
                                <div className='w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2'>
                                    <p className='text-[14px]'>{name}</p>
                                </div>
                                <div className='w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2'>
                                    <p className='text-[14px]'>{email}</p>
                                </div>
                                <div className='w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2'>
                                    <p className='text-[14px]'>{gender}</p>
                                </div>
                                <div className='w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2'>
                                    <p className='text-[14px]'>{status}</p>
                                </div>
                            </div>
                            </>}
                        
                        </td>
                    </tr>
                </tbody>
            </table>
 
            {updateUser ? 
                null
                :
                <>
                    <Button onClick={() => handleDelete(userId)} text='Delete'/>
                    <Button onClick={handleUpdate} text='Update' />
                </>}


        </Layout>
    )
}

export default UserDetailView