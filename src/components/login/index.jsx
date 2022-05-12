import React, { useCallback, useEffect, useRef } from 'react';

import { HfnFirebaseAuth, signOut } from '@heartfulnessinstitute/react-hfn-profile';

import { useNavigate } from 'react-router-dom';

import { authLogin } from 'services/cms/users';

import { toast } from 'react-toastify';

import { isLoginAuth } from 'utils/login';

const Login = () => {
  const navigate = useNavigate();
  const firebaseRef = useRef(null);
  const hasAPICall = useRef(false);

  const processLogin = useCallback(({ myInfo }) => {
    if (myInfo && firebaseRef.current) {
      firebaseRef.current.authFn.onAuthStateChanged(authState => {
        authState?.getIdToken().then(async (srcmToken) => {
          if (!hasAPICall.current && myInfo.id) {
            hasAPICall.current = true;
            localStorage.setItem("authToken", `${srcmToken}`);
          }
          authLogin().then(res => {
            if (res?.data?.isError === false && res?.data?.message === "Login Successful") {
              if (res?.data?.data?.role === "Super Admin") {
                localStorage.setItem("role", `${res?.data?.data?.role}`);
                navigate('/dashboard/users');
              } else if (res?.data?.data?.role === "Admin") {
                localStorage.setItem("role", `${res?.data?.data?.role}`);
                navigate('/dashboard/pages');
              }
            } else {
              toast.error('Somthing went wrong');
            }
            if (res?.data?.data?.project) {
              localStorage.setItem("AdminProject", `${JSON.stringify(res?.data?.data?.project)}`)
            }
          });
        })
      });
    }
  }, []);

  useEffect(() => {
    if (isLoginAuth()) {
      navigate('/dashboard');
    } else {
      signOut();
    }
  }, []);

  return (
    <div>
      <HfnFirebaseAuth ref={firebaseRef} doLogin={processLogin} />
    </div>
  );
};

export default Login;
