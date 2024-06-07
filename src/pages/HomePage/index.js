import PrimaryLayout from "../../components/Layouts/PrimaryLayout";
import Banner from "../../components/Banner";
import Main from "../../components/Main";
import { useEffect } from "react";
import titleMaker from '../../helpers/titleMaker';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
    useEffect(()=>{
        titleMaker("homepage")
   },[])
    return(
        <PrimaryLayout >
            <Banner/>
            <Main/>
        </PrimaryLayout>
    )
}