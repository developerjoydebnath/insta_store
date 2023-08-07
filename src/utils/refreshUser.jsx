import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { axiosInstance } from '../axios/axiosInstance';
import { useLogoutMutation } from '../features/auth/authApi';
import { loading, userLoggedIn } from '../features/auth/authSlice';

export const refreshUser = () => {
    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();

    const refresh = async () => {
        await axiosInstance
            .get('user/refresh', {
                withCredentials: true,
            })
            .then(async (res) => {
                if (res?.data) {
                    const token = res.data.accessToken;
                    await axiosInstance
                        .get('/user/index', { headers: { Authorization: `Bearer ${res.data.accessToken}` } })
                        .then((res) => {
                            if (res?.data?.user?.id) {
                                // console.log(res.data);
                                dispatch(
                                    userLoggedIn({
                                        accessToken: token,
                                        user: res.data.user,
                                        loading: false,
                                    }),
                                );
                            } else {
                                console.log('error happen');
                            }
                        })
                        .catch((err) => {
                            // console.log(err);
                            if (err.response.status !== 200) {
                                logout();
                                dispatch(loading({ loading: false }));
                            }
                        });
                } else {
                    logout();
                    dispatch(loading({ loading: false }));
                }
            })
            .catch((err) => {
                // console.log('hello');
                // dispatch(loading({ loading: false }));
                if (err.response.status !== 200) {
                    console.log(err.response.status);

                    dispatch(loading({ loading: false }));
                }
            });
    };

    // on render
    useEffect(() => {
        dispatch(loading({ loading: true }));
        refresh();
    }, []);

    // silent refresh
    // render every 5 second
    useEffect(() => {
        let interval = setInterval(() => {
            refresh();
        }, 1000 * 60 * 15);

        return () => clearInterval(interval);
    }, []);
};
