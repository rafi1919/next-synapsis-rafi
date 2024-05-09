import { useState } from "react";
import CardPost from "@/templates/components/CardPost"
import ReactPaginate from "react-paginate";
import { useCreateUserData } from "@/hooks";
import Layout from "@/templates/components/Layout";
import {FaUser} from 'react-icons/fa'
import Button from "@/templates/components/Button";
import { useRouter } from "next/router";


const AddUserView =()=>{
    const { createUserData, loading } = useCreateUserData();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const router = useRouter()
    
    const handleCreateUser=async(event:any)=>{
        event.preventDefault();

        await createUserData(name, email, gender, status)
        router.push('/User')
    }

    return(
        <Layout heading="Add User">
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
                            <p className='text-[14px] p-2 my-7 opacity-0'>Status</p>

                        </td>
                        <td>
                            <form onSubmit={handleCreateUser}>
                                <div>
                                <input className="w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div>
                                    <input className="w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <input className="w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
                                </div>
                                <div>
                                    <input className="w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
                                </div>
                                <Button text='Add User' type="submit" />

                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>    
       </Layout>
    )
}
export default AddUserView