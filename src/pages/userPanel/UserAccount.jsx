import React, { useState } from 'react';
import logo from '../../assets/Images/joy.png';
import Input, { InputSubmit } from '../../components/ui/Input';
import ProfileHeading from '../../components/ui/ProfileHeading';

const UserAccount = () => {
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('Male');
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="md:ms-5">
                <div className="mb-10">
                    <ProfileHeading heading="Profile" />
                    <div className="grid lg:grid-cols-3 grid-cols-1 mt-4">
                        <div className="flex flex-col justify-center items-center gap-y-5">
                            <div className="h-40 w-40 rounded-full bg-red-500 overflow-hidden">
                                <img src={logo} alt="logo" />
                            </div>
                            <form className="flex flex-col gap-5 w-60">
                                <input
                                    type="file"
                                    className="file-input file-input-bordered file-input-primary file-input-sm w-full"
                                />
                                <InputSubmit
                                    className="bg-red-100 text-lg font-medium text-primary hover:text-base-100 hover:bg-primary cursor-pointer"
                                    value="Update"
                                />
                            </form>
                        </div>
                        <div className="col-span-2">
                            <div>
                                <div>
                                    <form className="grid md:grid-cols-2 grid-cols-1">
                                        <div className="flex justify-center md:my-3 my-1">
                                            <Input
                                                id="profile-username"
                                                type="text"
                                                label="Username"
                                                required
                                                value={'Username'}
                                            />
                                        </div>
                                        <div className="flex justify-center md:my-3 my-1">
                                            <Input
                                                type="text"
                                                id="profile-full-name"
                                                label="Full Name"
                                                required
                                                value={'Full Name'}
                                            />
                                        </div>
                                        <div className="flex justify-center md:my-3 my-1">
                                            <Input
                                                type="email"
                                                id="profile-email"
                                                label="Email"
                                                required
                                                value={'Email'}
                                            />
                                        </div>
                                        <div className="flex justify-center md:my-3 my-1">
                                            <Input
                                                type="number"
                                                id="profile-phone"
                                                label="Phone"
                                                required
                                                value={'01700000000'}
                                            />
                                        </div>
                                        <div className="flex justify-center md:my-3 my-1">
                                            <Input
                                                type="date"
                                                id="profile-date"
                                                label="Date of Birth"
                                                required
                                                value={dateOfBirth}
                                                onChange={(e) => setDateOfBirth(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex justify-center md:my-3 my-1">
                                            <Input
                                                type="text"
                                                id="profile-gender"
                                                label="Gender"
                                                required
                                                expandIcon
                                                isOpen={isOpen}
                                                setIsOpen={setIsOpen}
                                                setGender={setGender}
                                                options={['Male', 'Female', 'Other']}
                                                value={gender}
                                                onChange={(e) => console.log(e.target.value)}
                                                onClick={() => setIsOpen(!isOpen)}
                                            />
                                        </div>
                                        <div className="flex justify-center md:my-3 my-2">
                                            <InputSubmit
                                                className="bg-red-100 text-lg font-medium text-primary hover:text-base-100 hover:bg-primary cursor-pointer"
                                                value="Update"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <div className="border">hello</div> */}
                    </div>
                </div>
                <div className="mb-5">
                    <h1 className="text-start text-xl font-semibold border-b border-dashed border-gray-300 pb-3">
                        #Shipping Address
                    </h1>
                    <form className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 mt-4">
                        <div className="flex justify-center md:my-3 my-1">
                            <Input type="text" id="profile-city" label="City" required value={'City'} />
                        </div>
                        <div className="flex justify-center md:my-3 my-1">
                            <Input type="number" id="profile-zip" label="ZIP" required value={451} />
                        </div>
                        <div className="flex justify-center md:my-3 my-1">
                            <Input type="text" id="profile-address" label="Address" required value={'Address'} />
                        </div>
                        <div className="flex justify-center md:my-3 my-2">
                            <InputSubmit
                                className="bg-red-100 text-lg font-medium text-primary hover:text-base-100 hover:bg-primary cursor-pointer"
                                value="Update"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserAccount;
