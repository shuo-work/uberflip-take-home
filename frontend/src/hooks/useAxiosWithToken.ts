import { useEffect } from "react";

import { axiosWithToken } from "../api/axios";
import useRefreshAccessToken from "./useRefreshAccessToken";
import useAuth from "./useAuth";

const useAxiosWithToken = () => {
    const refreshAccessToken = useRefreshAccessToken();
    const { auth }: any = useAuth();

    useEffect(() => {
        const reqIntercept = axiosWithToken.interceptors.request.use(
            config => {
                config.headers['Authorization'] = config.headers['Authorization'] || `Bearer ${auth?.accessToken}`;
                return config;
            }, (err) => Promise.reject(err)
        );

        const resIntercept = axiosWithToken.interceptors.response.use(
            res => res, async (err) => {
                const prevReq = err?.config;
                if (err?.response?.status === 403 && !prevReq.hasTried) {
                    prevReq.hasTried = true;
                    const newAccessToken = await refreshAccessToken();
                    prevReq.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosWithToken(prevReq);
                }
                return Promise.reject(err);
            }
        );
        return () => {
            axiosWithToken.interceptors.request.eject(reqIntercept);
            axiosWithToken.interceptors.response.eject(resIntercept);
        }
    }, [auth, refreshAccessToken]);

    return axiosWithToken;
}

export default useAxiosWithToken;
