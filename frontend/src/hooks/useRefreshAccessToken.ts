import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshAccessToken = () => {
    const { auth, setAuth }: any = useAuth();
    const { email } = auth;
    const refresh = async () => {
        let newToken = null;
        try {
            const response = await axios.get('/refreshAccessToken', {
                params: { email },
                withCredentials: true,
            });
            if (response.data.accessToken) {
                newToken = response.data.accessToken;
            } else {
                throw 'Refresh failed.'
            }
        } catch (err) {
            console.error(err);
        } finally {
            setAuth({ email, accessToken: newToken });
        }
        return newToken;
    }
    return refresh;
};

export default useRefreshAccessToken;
