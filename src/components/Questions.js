import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { endPoint } from '../helpers/Url';
import { AnserSection, BtnCheckAnswer, HeartIcon, InfoCntainer, OptionContainer, QuestionContainer, QuestionSection, Slider } from '../styles/QuestionStyle';

const Questions = () => {
    const params = useParams();
    const {id} = params;
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [currentAnserr, setCurrentAnserr] = useState(0);
    const [vidas, setVidas] = useState(1);
    
    
    const [option, setOption] = useState("");
    
    
    useEffect(() => {
        console.log(endPoint+"category/"+id+"/questions");
        getQuestions();
        
    }, []);
    
    
    const getQuestions = () => {
        axios.get(endPoint+"category/"+id+"/questions")
        .then(Response =>{
            console.log(Response.data);
            setQuestions(Response.data)
        })
        .catch(e => {
            console.log(e);
        })
    }
    const handleInputChange = (e) => {
        setOption(e.target.value)
        console.log(option);
    }

    
    const validation = () => {
        if (option === questions[currentAnserr]?.correctAnswer) {
            alert("Correcto")
            currentAnserr < 2 ?
            setCurrentAnserr(currentAnserr +1)
            : navigate('/', { replace: true })
        }
        else{
            alert("Incorrecto")
            if (vidas === 0) {
                alert("Vuelve a intentarlo")
                navigate('/', { replace: true })
            }else {
                setVidas(vidas-1)
                currentAnserr < 2 ?
                setCurrentAnserr(currentAnserr +1)
                : navigate('/', { replace: true })
            }
        }
    }
    
  return <QuestionContainer>
        
            <InfoCntainer>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Link>
                <Slider type="range" value={currentAnserr} max="4"/>
                <div>
                    <HeartIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                    </HeartIcon>
                    <span>{vidas}</span>
                </div>
            </InfoCntainer>   
            <QuestionSection>
                <div><svg width="75" height="159" viewBox="0 0 75 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.2863 74.4233C48.2863 74.4233 52.1758 75.6291 53.2128 79.2513C53.9596 81.8584 51.4146 81.6653 51.4146 81.6653L49.6163 81.0618H25.3682L23.57 81.6653C23.57 81.6653 21.0249 81.8584 21.7718 79.2513C22.8093 75.6291 26.6988 74.4233 26.6988 74.4233H48.2863Z" fill="#0C9684"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.265 152.964C26.9885 152.449 30.0748 153.515 30.0748 156.284C30.0748 159.052 27.0232 158.999 23.265 158.999C19.5061 158.999 16.5864 158.448 16.5864 156.887C16.5864 155.326 18.9067 153.568 23.265 152.964Z" fill="#F2F2F2"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M51.7351 152.964C48.0117 152.449 44.9253 153.515 44.9253 156.284C44.9253 159.052 47.9769 158.999 51.7351 158.999C55.494 158.999 58.4137 158.448 58.4137 156.887C58.4137 155.326 56.0934 153.568 51.7351 152.964Z" fill="#F2F2F2"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6522 120.972H43.6298C43.6298 120.972 33.8152 143.368 30.9293 149.951C30.4505 151.045 29.3751 151.75 28.1873 151.75C27.4432 151.75 26.5859 151.75 25.8043 151.75C24.3977 151.75 23.1807 150.766 22.878 149.383C21.2975 142.173 16.6522 120.972 16.6522 120.972Z" fill="#867BBD"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M58.7081 120.972H31.7305C31.7305 120.972 41.5451 143.368 44.4309 149.951C44.9098 151.045 45.9851 151.75 47.1729 151.75C47.917 151.75 48.7743 151.75 49.5559 151.75C50.9625 151.75 52.1795 150.766 52.4823 149.383C54.0627 142.173 58.7081 120.972 58.7081 120.972Z" fill="#867BBD"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M49.5924 81.6925C47.4962 82.6993 50.2048 89.757 53.6894 102.092C56.6745 112.659 61.9588 120.526 64.6562 119.231C67.3536 117.935 66.5772 107.756 61.8877 97.8382C57.1981 87.9204 51.6885 80.6857 49.5924 81.6925Z" fill="#E8C7A3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.6073 120.942C61.239 121.175 60.6625 124.759 60.0063 127.357C59.4669 129.492 61.0854 132.099 64.0508 131.807C66.4191 131.573 68.4342 128.397 68.3066 125.932C68.1559 123.028 66.5726 120.649 63.6073 120.942Z" fill="#E8C7A3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.4079 81.6925C27.504 82.6993 24.7954 89.757 21.3109 102.092C18.3258 112.659 12.9258 120.526 10.2284 119.23C7.53097 117.935 8.42302 107.756 13.1126 97.8382C17.8021 87.9204 23.3117 80.6857 25.4079 81.6925Z" fill="#E8C7A3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3929 120.942C13.7613 121.175 14.3377 124.759 14.994 127.357C15.5333 129.492 13.9148 132.099 10.9495 131.807C8.58116 131.573 6.56608 128.397 6.69366 125.932C6.84434 123.028 8.4276 120.649 11.3929 120.942Z" fill="#E8C7A3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M58.5489 121.146L16.5864 121.151L25.5821 81.9189L37.5703 79.5049L49.5579 81.9189L58.5489 121.146Z" fill="#E8C7A3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.3584 77.4403C43.3584 75.7747 42.0157 74.4229 40.3614 74.4229H34.3674C32.713 74.4229 31.3704 75.7747 31.3704 77.4403V89.5102C31.3704 91.1758 32.713 92.5277 34.3674 92.5277H40.3614C42.0157 92.5277 43.3584 91.1758 43.3584 89.5102V77.4403Z" fill="#E8C7A3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M68.9455 39.7459C68.9455 25.6235 57.5575 14.1577 43.5309 14.1577H30.8236C16.797 14.1577 5.40894 25.6235 5.40894 39.7459V52.54C5.40894 66.6623 16.797 78.1281 30.8236 78.1281H43.5309C57.5575 78.1281 68.9455 66.6623 68.9455 52.54V39.7459Z" fill="#E8C7A3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8653 50.4874C11.5242 49.2016 10.2083 48.4394 8.92802 48.7859L4.2892 50.0416C3.00889 50.3882 2.47025 51.366 1.98748 52.9996C1.63924 54.1774 1.32101 56.2134 1.86884 58.2483C2.37748 60.1379 3.56673 61.9693 4.61327 62.8993C5.4597 63.6514 6.87034 64.9466 8.15065 64.6001L12.7895 63.3444C14.0698 62.9978 14.8321 61.673 14.4911 60.3872L11.8653 50.4874Z" fill="#E8C7A3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.1347 50.4874C63.4758 49.2016 64.7917 48.4394 66.072 48.7859L70.7108 50.0416C71.9911 50.3882 72.5297 51.366 73.0125 52.9996C73.3608 54.1774 73.679 56.2134 73.1312 58.2483C72.6225 60.1379 71.4333 61.9693 70.3867 62.8993C69.5403 63.6514 68.1297 64.9466 66.8493 64.6001L62.2105 63.3444C60.9302 62.9978 60.1679 61.673 60.509 60.3872L63.1347 50.4874Z" fill="#E8C7A3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.5954 65.5428C33.488 65.503 33.368 65.5242 33.2815 65.5994C33.1951 65.6746 33.1565 65.7912 33.18 65.9035C33.6105 67.0365 35.2896 67.8882 37.2944 67.8882C39.2992 67.8882 40.9783 67.0365 41.392 65.9001C41.4138 65.7937 41.3769 65.6839 41.2955 65.6129C41.2141 65.5419 41.1008 65.5216 40.9993 65.5588C40.0275 65.8714 38.7075 66.1139 37.2944 66.1139C35.8812 66.1139 34.5612 65.8714 33.5954 65.5428Z" fill="#562E32"/>
                <path d="M24.9921 61.5799C26.6473 61.5799 27.9891 60.2289 27.9891 58.5624C27.9891 56.8959 26.6473 55.5449 24.9921 55.5449C23.3369 55.5449 21.9951 56.8959 21.9951 58.5624C21.9951 60.2289 23.3369 61.5799 24.9921 61.5799Z" fill="#562E32"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1842 46.6358C27.9614 44.7535 24.9698 44.3745 22.5878 44.8253C19.8276 45.348 16.7233 46.5749 16.5938 47.2393C16.4643 47.9038 18.0318 46.6618 21.9884 46.6358C24.1469 46.6213 25.8012 47.0414 26.1842 46.6358Z" fill="#562E32"/>
                <path d="M50.008 61.5799C48.3528 61.5799 47.011 60.2289 47.011 58.5624C47.011 56.8959 48.3528 55.5449 50.008 55.5449C51.6632 55.5449 53.005 56.8959 53.005 58.5624C53.005 60.2289 51.6632 61.5799 50.008 61.5799Z" fill="#562E32"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.8159 46.6358C47.0387 44.7535 50.0303 44.3745 52.4123 44.8253C55.1726 45.348 58.2769 46.5749 58.4063 47.2393C58.5358 47.9038 56.9684 46.6618 53.0117 46.6358C50.8533 46.6213 49.1989 47.0414 48.8159 46.6358Z" fill="#562E32"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M59.8605 122.717L57.0541 111.885L60.129 117.876L61.7036 118.804L62.4859 119.802L64.6773 119.436L66.8687 119.071L67.0605 117.277L67.8846 115.665C67.8846 115.665 67.0515 107.284 61.4363 96.2167C59.0675 91.5487 56.6639 86.8885 53.155 83.203C51.6295 81.6007 49.6706 81.0756 49.6706 81.0756L43.6766 79.8687L37.5489 84.0931L31.4189 79.8687L25.4248 81.0756C25.4248 81.0756 23.4666 81.6007 21.9411 83.203C18.4316 86.8885 16.0286 91.5487 13.6598 96.2167C8.04459 107.284 7.21143 115.665 7.21143 115.665L8.0356 117.277L8.22679 119.071L12.6102 119.802L13.3925 118.804L14.9671 117.876L18.0414 111.885L15.235 122.717C15.235 122.717 22.317 124.527 37.5466 124.527C52.7768 124.527 59.8605 122.717 59.8605 122.717Z" fill="#0C9684"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M41.8226 86.9417C41.8226 86.4442 41.421 86.04 40.9271 86.04H40.9199C40.426 86.04 40.0244 86.4442 40.0244 86.9417V95.5487C40.0244 96.0461 40.426 96.4503 40.9199 96.4503H40.9271C41.421 96.4503 41.8226 96.0461 41.8226 95.5487V86.9417Z" fill="#E6E6E6"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.332 86.9415C35.332 86.4439 34.9304 86.04 34.4365 86.04H34.4293C33.9354 86.04 33.5338 86.4439 33.5338 86.9415V97.8119C33.5338 98.3095 33.9354 98.7134 34.4293 98.7134H34.4365C34.9304 98.7134 35.332 98.3095 35.332 97.8119V86.9415Z" fill="#E6E6E6"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.57917 49.869C6.76179 49.6656 8.11284 52.1297 8.11284 52.1297C8.11284 52.1297 13.74 40.9621 14.0092 34.6284C14.1764 30.6978 13.8989 28.5934 13.8989 28.5934C13.8989 28.5934 19.8689 24.5796 30.6821 28.5934C41.4953 32.6073 53.4594 27.3865 53.4594 27.3865C53.4594 27.3865 53.0266 32.5162 55.857 37.6459C58.6874 42.7756 66.6462 51.828 66.6462 51.828C66.6462 51.828 67.7425 49.099 69.1158 49.2655C70.489 49.4315 71.4414 50.3192 71.4414 50.3192C71.4414 50.3192 74.2538 34.5149 71.4414 24.369C68.629 14.223 61.462 14.835 60.0528 14.1096C58.6436 13.3842 59.8892 9.7427 57.6552 7.47115C55.4212 5.1996 41.6122 -4.64158 24.6881 2.6432C7.76399 9.92798 10.1268 19.1113 9.10365 20.748C8.08048 22.3847 4.71543 20.9218 3.10964 31.0074C1.50384 41.093 3.70904 50.3192 3.70904 50.3192C3.70904 50.3192 4.39655 50.0718 5.57917 49.869Z" fill="#AA3F39"/>
                </svg>
                </div>
                <div><p>{questions[currentAnserr]?.question}</p></div>
            </QuestionSection>
            <AnserSection>
                <OptionContainer>
                    <label for={0}>{questions[currentAnserr]?.answers[0]}</label>
                    <input type="radio" name='response'value={questions[currentAnserr]?.answers[0]} onChange={handleInputChange}/>
                </OptionContainer>
                <OptionContainer>
                    <label for={1}>{questions[currentAnserr]?.answers[1]}</label>
                    <input type="radio" name='response'value={questions[currentAnserr]?.answers[1]} onChange={handleInputChange}/>
                </OptionContainer>
                <OptionContainer>
                    <label for={2}>{questions[currentAnserr]?.answers[2]}</label>
                    <input type="radio" name='response'value={questions[currentAnserr]?.answers[2]} onChange={handleInputChange}/>
                </OptionContainer>
            </AnserSection>
            <BtnCheckAnswer onClick={() => validation()}>COMPROBAR</BtnCheckAnswer>
        </QuestionContainer>;
};

export default Questions;
