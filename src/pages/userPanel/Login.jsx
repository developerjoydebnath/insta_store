import React, { useEffect, useState } from 'react';
import { CiLock, CiMail } from 'react-icons/ci';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation, useLogoutMutation } from '../../features/auth/authApi';
import Loading from '../../ui/Loading';

const Login = () => {
    const [login, { data, isLoading, isError, error }] = useLoginMutation();
    const [logout] = useLogoutMutation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [verifiedEmail, setVerifiedEmail] = useState('');
    const [formError, setFormError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    // handling error got from the server
    useEffect(() => {
        if (isError && error?.data?.message) {
            setFormError(error.data.message);
        }
        if (data) {
            setTimeout(() => {
                navigate(from, { replace: true });
            }, 100);
        }
    }, [isError, data]);

    // checking strong password
    useEffect(() => {
        if (password) {
            setPasswordError('');
        } else {
            setPasswordError('Password required!');
        }
    }, [password]);

    // checking valid email
    useEffect(() => {
        if (email) {
            setEmailError('');
            if (/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/.test(email)) {
                setEmailError('');
                setVerifiedEmail(email);
            } else {
                setVerifiedEmail('');
                setEmailError('Invalid email');
            }
        } else {
            setVerifiedEmail('');
            setEmailError('Email required!');
        }
    }, [email]);

    const handleLogin = (e) => {
        e.preventDefault();
        setFormError('');
        if (verifiedEmail && password) {
            const loginData = { email, password };
            login(loginData);
        } else {
            setFormError('Please fill all requirements!');
        }
    };

    const handleShowPassword = (e) => {
        const isShown = e.target.checked;
        const passwordElement = document.getElementById('password');

        if (isShown) {
            passwordElement.type = 'text';
        } else {
            passwordElement.type = 'password';
        }
    };

    return (
        <div className="bg-[#efefef] h-screen flex items-center justify-center relative">
            <div className="bg-style-div"></div>
            <div className="bg-white min-w-[300px] w-[1100px] min-h-[600px] flex z-10 rounded mx-10 ">
                <div className="md:w-1/2 lg:w-1/2 md:block lg:block hidden border-r-[1px] py-7 ">
                    <button className="btn btn-primary" onClick={() => logout()}>
                        Logout
                    </button>
                </div>
                <div className="md:w-1/2 w-full py-7 my-auto">
                    <div>
                        <form onSubmit={handleLogin}>
                            <h1 className="text-3xl font-bold mb-5">
                                Log<span className="text-primary">In</span>
                            </h1>
                            {/* ======== email address =============== */}
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
                                        <p className="input-error">{emailError}</p>
                                    </span>
                                )}
                            </div>
                            {/* ============= password ===================== */}
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
                                        <p className="input-error">{passwordError}</p>
                                    </span>
                                )}
                            </div>
                            {/* =========== show password & forgot password ============= */}
                            <div className="flex justify-between w-[90%] mx-auto my-3">
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
                                <div className="text-lg">
                                    <Link to="/auth/reset-password" className="text-primary">
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>
                            {/* =========== submit button =============== */}
                            <div className="">
                                {!isLoading ? (
                                    <input
                                        // disabled={isLoading}
                                        className="btn-field hover:bg-primary"
                                        type="submit"
                                        value="Login"
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
                            Don't have an account?
                            <Link to="/auth/signup" className="text-primary ms-1">
                                Register here.
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
