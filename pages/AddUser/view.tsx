import { useState } from "react";
import { ValidationError } from 'yup';

import {userValidation, emailValidation, genderValidation, statusValidation} from "@/helper";
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
    const [errors, setErrors] = useState<{[key: string]: string}>({});
    const router = useRouter()
    
    const handleCreateUser=async(e:React.FormEvent)=>{
        e.preventDefault();

        try {
            await userValidation.validate({ user: name }, { abortEarly: false });
            await emailValidation.validate({ email }, { abortEarly: false });
            await genderValidation.validate({ gender }, { abortEarly: false });
            await statusValidation.validate({ status }, { abortEarly: false });

            await createUserData(name, email, gender, status);
            router.push('/User');
        } catch (validationErrors) {
            const formattedErrors: {[key: string]: string} = {};
            (validationErrors as ValidationError).inner.forEach((error) => {
                formattedErrors[error.path as keyof typeof formattedErrors] = error.message;
            });
            setErrors(formattedErrors);
        }
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
                                        {errors.user && <p className="text-red-500">{errors.user}</p>}
                                    </div>
                                    <div>
                                        <input className="w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <select className="w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2" value={gender} onChange={(e) => setGender(e.target.value)}>
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>                              
                                        </select>
                                        {errors.gender && <p className="text-red-500">{errors.gender}</p>}
                                    </div>
                                    <div>
                                        <select className="w-full p-2 rounded-md bg-slate-100 flex items-center justify-center m-2" value={status} onChange={(e) => setStatus(e.target.value)}>
                                            <option value="">Select Status</option>
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>                                
                                        </select>
                                        {errors.status && <p className="text-red-500">{errors.status}</p>}
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