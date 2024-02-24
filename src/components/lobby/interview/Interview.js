import InterviewItem from './interviewItem/InterviewItem';
import './Interview.css';
import Card from '../../common/Card/Card';

import { getDefaultDays, getDefaultDescription, getDefaultViews } from '../../../common/utility/DefaultUtils';

const Interview = () => {

    //Populate via web service call
    const interviewItems = [
        {id: Math.random(), days: getDefaultDays(), views: getDefaultViews(), description: getDefaultDescription()},
        {id: Math.random(), days: getDefaultDays(), views: getDefaultViews(), description: getDefaultDescription()},
        {id: Math.random(), days: getDefaultDays(), views: getDefaultViews(), description: getDefaultDescription()} ];

    const clickHandler = () => {
        console.log("Show more button clicked");
    }    

    return (
        <div>
            <h5>Interview</h5>
            <Card>
                <InterviewItem id={interviewItems[0].id} days={interviewItems[0].days} views={interviewItems[0].views} description={interviewItems[0].description}></InterviewItem>
            </Card>
            <Card>
                <InterviewItem id={interviewItems[1].id} days={interviewItems[1].days} views={interviewItems[1].views} description={interviewItems[1].description}></InterviewItem>
            </Card>
            <Card>
                <InterviewItem id={interviewItems[2].id} days={interviewItems[2].days} views={interviewItems[2].views} description={interviewItems[2].description}></InterviewItem>
            </Card>
            <button onClick={clickHandler}>show more</button>
        </div>
    );
}

export default Interview;