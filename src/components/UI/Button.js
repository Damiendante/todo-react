/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { PropTypes } from 'prop-types';

function Button({
    children,
    bgColor,
    fgColor,
    size,
    hollow,
    uniqueStyle,
    handler
}) {
    const ButtonStyle = css({
        borderRadius: '4px',
        background: `${hollow ? 'none' : bgColor}`,
        border: `${hollow ? '2px solid' : 'none'}`,
        borderColor: `${hollow ? bgColor : 'transparent'}`,
        color: `${hollow ? bgColor : fgColor}`,
        padding: '10px',
        fontSize: `${size === 'large' ? '1.4rem' : '1rem'}`,
        cursor: 'pointer'
    });

    return (
        <button onClick={handler} css={[ButtonStyle, uniqueStyle]}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    bgColor: 'grey',
    fgColor: '#FFFFFF',
    hollow: false
};
Button.propTypes = {
    children: PropTypes.node.isRequired,
    bgColor: PropTypes.string,
    fgColor: PropTypes.string,
    hollow: PropTypes.bool,
    size: PropTypes.string,
    uniqueStyle: PropTypes.object
};

export default Button;
