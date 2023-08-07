import React, { useEffect, useState } from 'react';
import { CiLock } from 'react-icons/ci';
import { RiErrorWarningLine } from 'react-icons/ri';
import { useNavigate, useParams } from 'react-router-dom';
import { useNewPasswordMutation } from '../../features/auth/resetPasswordApi';

const NewPassword = () => {
  // handling the local states
  const { id } = useParams();
  const [newPassword, { data: userData, isLoading, isError, error }] = useNewPasswordMutation();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [verifiedPassword, setVerifiedPassword] = useState('');
  const [formError, setFormError] = useState('');
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

  console.log(userData);

  // handling error get from the server
  useEffect(() => {
    setFormError('');
    if (isError && error?.data?.message) {
      setFormError(error.data.message);
    }
    if (userData?.success) {
      navigate('/auth/login');
    }
  }, [isError, userData]);

  // handling signup process
  const handleSignup = (e) => {
    e.preventDefault();
    setFormError('');
    if (verifiedPassword) {
      const data = {
        id: id,
        newPassword: verifiedPassword,
      };

      newPassword(data);
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
                New <span className="text-primary">Password</span>
              </h1>
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
                    <p className="input-error">{confirmPasswordError}</p>{' '}
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
              {/*  ================ submit button ================= */}
              <div className="">
                <input
                  disabled={isLoading || userData}
                  className="btn-field hover:bg-primary"
                  type="submit"
                  value="submit"
                />
              </div>
            </form>
            {/* =========== show error after submitting ================= */}
            {formError && (
              <span className="flex justify-center items-center">
                <RiErrorWarningLine className="text-error" />
                <h1 className="text-error text-lg ms-2">{formError}</h1>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
