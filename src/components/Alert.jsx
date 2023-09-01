import Alert from 'react-bootstrap/Alert';

const Feedback = ({ feedback, setFeedback }) => {
    if (!feedback) {
        return false;
    }
    
    return (
        <Alert variant={feedback.error ? "danger" : "success"} onClose={() => setFeedback("")} dismissible>
            {feedback.error || feedback.success}
        </Alert>
    );
};

export default Feedback;
