import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

export const Notification = ({ message }) => {
    return (
        <Message>
            <p>{message}</p>
        </Message>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
};