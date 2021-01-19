/** @jsx jsx */
import Button from './Button';
import useLogin from '../Login/useLogin';
import { jsx, css } from '@emotion/core';

function Header() {
    const { username, logout } = useLogin();
    const headerStyle = css({
        background: 'whitesmoke',
        borderBottom: '2px solid #ededed',
        display: 'flex',
        flexFlow: 'row-reverse',
        padding: '5px 20px'
    });

    const divStyle = css({
        display: 'flex',
        alignItems: 'center',
        '& p': {
            margin: '0 10px'
        }
    });

    return (
        <header css={headerStyle}>
            <div css={divStyle}>
                <img
                    src="https://icon.now.sh/account_circle/48/9fadbb"
                    alt=""
                />
                <p>
                    Logged in as <strong>{username}</strong>
                </p>
                <Button handler={logout}>Logout</Button>
            </div>
        </header>
    );
}

export default Header;
