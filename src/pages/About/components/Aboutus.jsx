import './ebsb.css';
import ebsblogo from './img/LOGO-EBSB.png';
import ebsblogo2 from './img/Sardar-VP-visit-to-Bihar-1929-DDR-1.jpg';
import img1 from '../components/img/Sardar-VP-visit-to-Bihar-1929-DDR-1.jpg'
// import 'hs-carousel/dist/hs-carousel.min.css';
// import { initCarousel } from 'hs-carousel'; 
// import hs-carousel from 'hs-carousel';
import Slider from './Slider';

function Aboutus() {

    return (
        <div class="container">
            <div class="w-full h-auto pt-10 ">
                <Slider />
            </div>
            <h1>About</h1>
            <div class="card">
                <div class="card-1">
                    <div class="items-1">
                        <h4>EBSB Board</h4>
                        <p style={{ marginLeft: '15px' }}>The EBSB (Ek Bharat Shreshtha Bharat) board is committed to fostering unity in diversity anit
                            promoting cultural exchange across india. Through our initiatives, we aim to celebrate tapestry
                            of our nation's heritage and traditions. Join us in our journey to strengthen the bonds of unity
                            among the diverse cultures of India, paving the way for a truly inclusive vibrant society.
                        </p>
                    </div>
                    <div class="item-2">
                        <h4 style={{ marginTop: '15px', marginLeft: '4px' }}>OBJECTIVES</h4>
                        <div style={{ marginLeft: '20px' }}>
                            <ul style={{ listStyle: 'disc' }}>
                                <li >
                                    <p>Promoting cultural integration: Facilitating interactions and exchanges among people from
                                        different regions and cultures of india to foster a sense of unity in diversity.
                                    </p>
                                </li>
                                <li>
                                    <p>Celabenting divenity: Organsing events, festivals, and programs that appreciati tural
                                        heritage of India and primele traditions.
                                    </p>
                                </li>
                                <li>
                                    <p>Encouraging language leaming: Providing opportunities for individuals to learn and
                                        appreciate languages from different parte of India. thereby promoting linguistic
                                        diversity and understanding. </p>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div class="card-2">
                    <img style={{ marginTop: '0px' }} src={ebsblogo2} alt="" id="sardar-vp" />
                    <h3 style={{ marginTop: '25px', marginBottom: '20px', fontWeight: '700' }}>सरदार वल्लभभाई पटेल ने हमें भारत दिया है, अब यह हमारी जिम्मेदारी है कि हम इसे श्रेष्ठ बनाएं।</h3>

                </div>
            </div>


        </div>
    );
}

export default Aboutus;

