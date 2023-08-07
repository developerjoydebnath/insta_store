import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { axiosInstance } from '../axios/axiosInstance';
import { useLogoutMutation } from '../features/auth/authApi';
import { userLoggedIn } from '../features/auth/authSlice';

export const text = () => {
    const [logout, { data: userrr }] = useLogoutMutation();
    const dispatch = useDispatch();

    const refresh = async () => {
        await axiosInstance
            .get('user/refresh', {
                withCredentials: true,
            })
            .then((res) => {
                if (res?.data) {
                    axiosInstance
                        .get('/user/index', { headers: { Authorization: `Bearer ${res.data.accessToken}` } })
                        .then((res) => {
                            console.log(res);
                            if (res?.data?.user?.id) {
                                console.log('data got');
                                dispatch(userLoggedIn({ accessToken: res.data.accessToken, user: res.data.user }));
                            }
                        })
                        .catch((err) => {
                            if (err.response.status !== 200) {
                                logout();
                            }
                        });
                } else {
                    logout();
                }
            });
    };

    // on render
    useEffect(() => {
        refresh();
    }, []);

    // silent refresh
    // render every 5 second
    useEffect(() => {
        let interval = setInterval(() => {
            refresh();
        }, 2000);

        return () => clearInterval(interval);
    }, []);
};
