import './InterviewItem.css';

const InterviewItem = ({ days, views, description }) => {
    const defaultDays = days;
    const defaultViews = views;
    const defaultDescription = description;

    return (
        <div className="">
            <video src="#" controls="controls"></video>
            <h6>{ defaultDescription }</h6>
            <p>{ defaultViews } views | { defaultDays } days ago</p>
        </div>
    );
}

export default InterviewItem;