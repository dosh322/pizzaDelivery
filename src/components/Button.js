import classNames from 'classnames';

const Button = ({ children, className, outline, onClick }) => {
    const cn = classNames('button', className, {
        'button--outline': outline,
    });
    return (
        <button onClick={onClick} className={cn}>
            {children}
        </button>
    );
};

export default Button;
