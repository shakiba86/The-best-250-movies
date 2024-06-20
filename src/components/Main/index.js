import ComingSoon from '../ComingSoon';
import FrequentlyAskQuestions from '../FrequentlyAskQuestions';
import Schedule from '../schedule';
import { faq } from '../FrequentlyAskQuestions';
import './style.css';
import TvSeries from '../TvSeries';





export default function Main() {
    return (
        <main>
            <Schedule></Schedule>
            <ComingSoon></ComingSoon>
            <TvSeries></TvSeries>
            <FrequentlyAskQuestions  data= {faq}></FrequentlyAskQuestions>
        </main>
    )
}