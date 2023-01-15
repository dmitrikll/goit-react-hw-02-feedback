import PropTypes from 'prop-types';
import { Button } from './FeedBackOptions.styled';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
    return (<>
        {
            options.map(option => (
                <Button
                    key={option}
                    type='button'
                    name={option}
                    onClick={() => onLeaveFeedback(option)}>
                    {option}
                </Button>
            ))}
    </>)
};

FeedBackOptions.propTypes= {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};