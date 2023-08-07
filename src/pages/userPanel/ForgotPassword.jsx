import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiMail, CiMobile4 } from 'react-icons/ci';
import { RiErrorWarningLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useResetPasswordMutation, useVerifyOtpMutation } from '../../features/auth/resetPasswordApi';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    Accept: 'application/json',
  },
  withCredentials: true,
});

const ForgotPassword = () => {
  const [resetPassword, { data, isLoading, isError, error }] = useResetPasswordMutation();
  const [verifyOtp, { data: verifiedOtpId, isLoading: isOtpLoading, isError: isOtpError, error: verifyOptError }] =
    useVerifyOtpMutation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [verifiedEmail, setVerifiedEmail] = useState('');
  const [formError, setFormError] = useState('');
  const [verifyOtpError, setVerifyOtpError] = useState('');
  const [startCountDown, setStartCountDown] = useState(false);
  const [counter, setCounter] = useState(0);
  const [otp, setOTP] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(JSON.parse(localStorage.getItem('btnControl')));
  const navigate = useNavigate();

  const resetPasswordEmail = localStorage.getItem('resetPassEmail');

  // control the send code button
  const btnControl = async () => {
    await axiosInstance
      .get('user/checkBtn', {
        withCredentials: true,
      })
      .then((res) => {})
      .catch((err) => {
        if (!err?.response?.data?.success) {
          localStorage.removeItem('btnControl');
          localStorage.removeItem('resetPassEmail');
          setBtnDisabled(null);
        }
      });
  };

  // disabled the send otp button for 2 minutes
  useEffect(() => {
    if (btnDisabled) {
      let intervalId = setInterval(() => {
        btnControl();
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [btnDisabled]);

  let secondsLeft = 120;

  // the countdown timer for resend otp
  useEffect(() => {
    if (startCountDown) {
      const countdown = setInterval(function () {
        if (secondsLeft <= 0) {
          clearInterval(countdown);
          setCounter(0);
          setStartCountDown(false);
        } else {
          setCounter(secondsLeft);
          secondsLeft--;
        }
      }, 1000);
    }
  }, [startCountDown]);

  // change the start count down when the email is sent to the user
  useEffect(() => {
    if (data?.email) {
      toast(`OTP sent to ${data.email}. Please check your email inbox or spam folder.`);
      setStartCountDown(true);
      localStorage.setItem('btnControl', true);
      setBtnDisabled(true);
    }
  }, [data]);

  // handling error got from the server
  useEffect(() => {
    if (isError && error?.data?.message) {
      setFormError(error.data.message);
    }
  }, [isError]);

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

  // handling verify otp error got from the server
  useEffect(() => {
    if (isOtpError && verifyOptError?.data?.message) {
      setVerifyOtpError(verifyOptError.data.message);
    }
    if (verifiedOtpId) {
      const id = verifiedOtpId?.id;

      localStorage.removeItem('resetPassEmail');
      localStorage.removeItem('btnControl');

      navigate(`/auth/new-password/${id}`);
    }
  }, [isOtpError, verifiedOtpId]);

  // handling reset password
  const handleResetPassword = (e) => {
    e.preventDefault();
    setFormError('');
    if (verifiedEmail) {
      const data = { email };
      resetPassword(data);
    } else {
      setFormError('Please fill all requirements!');
    }
  };

  // handling verifying otp code
  const verifyOTP = (e) => {
    e.preventDefault();
    if (otp) {
      const email = localStorage.getItem('resetPassEmail');
      verifyOtp({ token: otp, email });
    } else {
      setVerifyOtpError('Please give otp code');
    }
  };

  return (
    <>
      <div className="bg-[#efefef] h-screen flex items-center justify-center relative">
        <div className="bg-style-div"></div>
        <div className="bg-white min-w-[300px] w-[1100px] min-h-[600px] flex z-10 rounded mx-10 ">
          <div className="md:w-1/2 lg:w-1/2 md:block lg:block hidden border-r-[1px] py-7 ">
            <button className="btn btn-primary">Logout</button>
          </div>
          <div className="md:w-1/2 w-full py-7 my-auto">
            <div>
              <form onSubmit={handleResetPassword}>
                <h1 className="text-3xl font-bold mb-5">
                  Reset<span className="text-primary">Password</span>
                </h1>
                {/* ======= email address ============== */}
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

                <div className="">
                  <input disabled={btnDisabled} className="btn-field hover:bg-primary" type="submit" value="send otp" />
                </div>
              </form>
              {formError && (
                <span className="flex justify-center items-center">
                  <RiErrorWarningLine className="text-error" />
                  <h1 className="text-error text-lg ms-2">{formError}</h1>
                </span>
              )}
              {counter > 0 && (
                <span className="flex justify-center items-center">
                  <RiErrorWarningLine className="text-error" />
                  <h1 className="text-error text-lg ms-2">Send OTP again in {counter} seconds</h1>
                </span>
              )}
              {resetPasswordEmail && (
                <form onSubmit={verifyOTP}>
                  <h1 className="text-3xl font-bold mb-5">
                    Verify<span className="text-primary">OTP</span>
                  </h1>
                  {/* ======= email address ============== */}
                  <div className="inputBox">
                    <label htmlFor="verify-code"></label>
                    <input
                      required
                      className="input-field placeholder:italic focus:border-primary"
                      type="text"
                      name="verify-code"
                      id="verify-code"
                      placeholder="XX-XX-XX-XX"
                      value={otp}
                      onChange={(e) => setOTP(e.target.value)}
                    />
                    <CiMobile4 className="icon-input" />

                    {resetPasswordEmail && (
                      <span className="input-field-error">
                        <CiMail className="text-error" />
                        <p className="input-error">{resetPasswordEmail}</p>
                      </span>
                    )}
                  </div>

                  <div className="">
                    <input
                      disabled={!resetPasswordEmail}
                      className="btn-field hover:bg-primary"
                      type="submit"
                      value="Verify otp"
                    />
                  </div>
                  {verifyOtpError && (
                    <span className="flex justify-center items-center">
                      <RiErrorWarningLine className="text-error" />
                      <h1 className="text-error text-lg ms-2">{verifyOtpError}</h1>
                    </span>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ForgotPassword;
