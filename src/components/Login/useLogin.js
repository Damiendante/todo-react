import { useContext } from 'react';
import { Context } from '../../Context';
import { useHistory } from 'react-router-dom';

function useLogin() {
    const { username, setUsername } = useContext(Context);
    const history = useHistory();

    function login(text) {
        if (text) {
            setUsername(text);
            history.push('/todos');
        }
    }

    function logout() {
        setUsername('');
        history.push('/');
    }

    return { username, login, logout };
}

export default useLogin;
