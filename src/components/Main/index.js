import ComingSoon from '../ComingSoon';
import FrequentlyAskQuestions from '../FrequentlyAskQuestions';
import Schedule from '../schedule';
import { faq } from '../FrequentlyAskQuestions';
import './style.css';

export default function Main() {
    return (
        <main>
            <Schedule></Schedule>
            <ComingSoon></ComingSoon>
            <FrequentlyAskQuestions  data= {faq}></FrequentlyAskQuestions>
        </main>
    )
}