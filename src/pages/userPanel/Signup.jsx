import React, { useEffect, useState } from 'react';
import { CiLock, CiMail, CiUser } from 'react-icons/ci';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useSignupMutation } from '../../features/auth/authApi';

const Signup = () => {
    // handling the local states
    const [signup, { data: user, isLoading, error, isError }] = useSignupMutation();
    const [username, setUsername] = useState('');
    const [verifiedUsername, setVerifiedUsername] = useState('');
    const [userError, setUserError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [verifiedEmail, setVerifiedEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [verifiedPassword, setVerifiedPassword] = useState('');
    const [formError, setFormError] = useState('');
    const [acceptTaC, setAcceptTaC] = useState(false);
    const navigate = useNavigate();

    // checking strong password and matching password with confirmed password
    useEffect(() => {
        if (password) {
            setPasswordError('');
            if (/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
                setPasswordError('');
                if (/^(?=.*\d)(?=.*\W).+$/.test(password)) {
                    setPasswordError('');
                    if (/^.{8,}$/.test(password)) {
                        setPasswordError('');
                        if (password === confirmPassword) {
                            setConfirmPasswordError('');
                            setVerifiedPassword(password);
                        } else {
                            setVerifiedPassword('');
                            setConfirmPasswordError('Password does not match!');
                        }
                    } else {
                        setVerifiedPassword('');
                        setPasswordError('Must contain at least 8 characters!');
                    }
                } else {
                    setVerifiedPassword('');
                    setPasswordError('Must contain at least 1 number & special character!');
                }
            } else {
                setVerifiedPassword('');
                setPasswordError('Must contain at least 1 uppercase & lowercase letter!');
            }
        } else {
            setVerifiedPassword('');
            setPasswordError('Password required!');
        }
    }, [password, confirmPassword]);

    // checking valid email
    useEffect(() => {
        if (email) {
            setEmailError('');
            if (/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/.test(email)) {
                setEmailError('');
                setVerifiedEmail(email);
            } else {
                setVerifiedEmail('');
                setEmailError('Invalid email!');
            }
        } else {
            setVerifiedEmail('');
            setEmailError('Email required!');
        }
    }, [email]);

    // checking username
    useEffect(() => {
        if (username) {
            setUserError('');
            if (/^[a-z]+$/.test(username)) {
                setUserError('');
                setVerifiedUsername(username);
            } else {
                setVerifiedUsername('');
                setUserError('Only lowercase letters are allowed!');
            }
        } else {
            setVerifiedUsername('');
            setUserError('Username required!');
        }
    }, [username]);

    // handling error get from the server
    useEffect(() => {
        setFormError('');
        if (isError && error?.data?.message) {
            setFormError(error.data.message);
        }
        if (user) {
            toast('Successfully Registered');
            navigate('/');
        }
    }, [isError, user]);

    // handling signup process
    const handleSignup = (e) => {
        e.preventDefault();
        setFormError('');
        if (verifiedEmail && verifiedPassword && verifiedUsername && acceptTaC) {
            const data = {
                username: verifiedUsername,
                password: verifiedPassword,
                email: verifiedEmail,
                role: 'user',
                avatar: '',
                emailVerified: false,
                verificationToken: '',
                phoneNumber: '',
                address: '',
                name: '',
            };

            signup(data);
        } else {
            setFormError('Please fill all requirements!');
        }
    };

    // show password functionality
    const handleShowPassword = (e) => {
        const isShown = e.target.checked;
        const passwordElement = document.getElementById('password');
        const confirmPasswordElement = document.getElementById('confirm-password');

        if (isShown) {
            passwordElement.type = 'text';
            confirmPasswordElement.type = 'text';
        } else {
            passwordElement.type = 'password';
            confirmPasswordElement.type = 'password';
        }
    };

    return (
        <div className="bg-[#efefef] h-screen flex items-center justify-center relative">
            <div className="bg-style-div"></div>
            <div className="bg-white min-w-[300px] w-[1100px] min-h-[600px] flex z-10 rounded mx-10 ">
                <div className="md:w-1/2 lg:w-1/2 md:block lg:block hidden border-r-[1px] py-7 ">
                    <button className="btn btn-primary">Logout</button>
                </div>
                <div className="md:w-1/2 w-full py-7 my-auto">
                    <div>
                        <form onSubmit={handleSignup}>
                            <h1 className="text-3xl font-bold mb-5">
                                Sign<span className="text-primary">Up</span>
                            </h1>
                            {/* ============== user name =================== */}
                            <div className="inputBox">
                                <label htmlFor="username"></label>
                                <input
                                    required
                                    className="input-field placeholder:italic focus:border-primary"
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username *"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <CiUser className="icon-input" />
                                {userError && (
                                    <span className="input-field-error">
                                        <RiErrorWarningLine className="text-error" />
                                        <p className="input-error">{userError}</p>{' '}
                                    </span>
                                )}
                            </div>
                            {/* ==================== email address ==================== */}
                            <div className="inputBox">
                                <label htmlFor="email"></label>
                                <input
                                    required
                                    className="input-field placeholder:italic focus:border-primary"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email address *"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <CiMail className="icon-input" />
                                {emailError && (
                                    <span className="input-field-error">
                                        <RiErrorWarningLine className="text-error" />
                                        <p className="input-error">{emailError}</p>{' '}
                                    </span>
                                )}
                            </div>
                            {/* ================ password =================== */}
                            <div className="inputBox">
                                <label htmlFor="password"></label>
                                <input
                                    required
                                    className="input-field placeholder:italic focus:border-primary"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password *"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <br />

                                <CiLock className="icon-input" />
                                {passwordError && (
                                    <span className="input-field-error">
                                        <RiErrorWarningLine className="text-error" />
                                        <p className="input-error">{passwordError}</p>{' '}
                                    </span>
                                )}
                            </div>
                            {/* ================== confirm password ======================= */}
                            <div className="inputBox">
                                <label htmlFor="confirm-password"></label>
                                <input
                                    required
                                    className="input-field placeholder:italic focus:border-primary"
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="Confirm password *"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <br />

                                <CiLock className="icon-input" />
                                {confirmPasswordError && (
                                    <span className="input-field-error">
                                        <RiErrorWarningLine className="text-error" />
                                        <p className="input-error">{confirmPasswordError}</p>
                                    </span>
                                )}
                            </div>
                            {/*  ============== show password =================== */}
                            <div className="flex justify-start w-[86%] mx-auto mb-1">
                                <div>
                                    <label htmlFor="checkbox">
                                        <input
                                            className="accent-primary cursor-pointer"
                                            type="checkbox"
                                            name="checkbox"
                                            id="checkbox"
                                            onChange={handleShowPassword}
                                        />
                                        <span className="ps-2 text-lg cursor-pointer">Show Password</span>
                                    </label>
                                </div>
                            </div>
                            {/*  ============== terms and conditions =================== */}
                            <div className="flex justify-start w-[86%] mx-auto mb-1">
                                <div>
                                    <label htmlFor="condition">
                                        <input
                                            className="accent-primary cursor-pointer"
                                            type="checkbox"
                                            name="condition"
                                            id="condition"
                                            onChange={(e) => setAcceptTaC(e.target.checked)}
                                        />
                                    </label>
                                    <span className="ps-2 text-lg">
                                        I accept all
                                        <Link to="/terms-and-conditions" className="text-primary ms-1 hover:underline">
                                            terms & conditions
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            {!acceptTaC && (
                                <span className="input-field-error">
                                    <RiErrorWarningLine className="text-error" />
                                    <p className="input-field-error-2 text-error ms-1">
                                        Please accept our Terms & Conditions
                                    </p>{' '}
                                </span>
                            )}
                            {/*  ================ submit button ================= */}
                            <div className="">
                                {!isLoading ? (
                                    <input
                                        // disabled={isLoading}
                                        className="btn-field hover:bg-primary"
                                        type="submit"
                                        value="Signup"
                                    />
                                ) : (
                                    <div className="text-lg text-primary font-normal h-14 btn bg-gray-200 hover:bg-gray-300 w-[90%] rounded-full border-none ps-4 my-4 pointer-events-none ">
                                        <Loading height="20" width="20" />
                                        <h1 className="ms-2">Processing...</h1>
                                    </div>
                                )}
                            </div>
                        </form>
                        {/* =========== show error after submitting ================= */}
                        {formError && (
                            <span className="flex justify-center items-center">
                                <RiErrorWarningLine className="text-error" />
                                <h1 className="text-error text-lg ms-2">{formError}</h1>
                            </span>
                        )}
                        <h1 className="my-3 text-lg">
                            Already registered?
                            <Link to="/auth/login" className="text-primary ms-1">
                                Login
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signup;
