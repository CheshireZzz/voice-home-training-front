import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Text, Box, List, ListItem, Heading, Center,HStack,
    VStack,Stack,Image } from '@chakra-ui/react';
import sheetImagePath from './sheet-image-path.json';
import sheet1 from "../src/FZ1.png";
import sheet2 from "../src/FZ2.png";
import barimg from "../src/bar.png";
import dialTest from "../src/Dial/Online_0.png"
import { atom, useRecoilState, RecoilRoot } from 'recoil';
import song from '../src/Frere Jacques.mp3';
import "./testTypeSuiSou0.css"





const sheetImagesPath = sheetImagePath.images;


const playState = atom < Boolean > ({
    key: 'playState',
    default: false,
});

function AudioPlayer() {
    const myRef = useRef < HTMLAudioElement > (null);
    const [play, setPlay] = useRecoilState(playState);
    // ���
    const start = () => {
        if (myRef.current) {
            myRef.current.play()
        }
        setPlay(true);
    };
    // �Ͻ� ����
    const stop = () => {
        if (myRef.current) {
            myRef.current.pause()
        }
        setPlay(false);
    };

    useEffect(() => {
        if (!myRef.current) return;
        if (play) {
            myRef.current.play();
        } else myRef.current.pause();
    }, [play]);

    return (
        <>
            <h1>AudioPlayer</h1>
            <audio ref={myRef} src={song} controls loop></audio>
            <br />
            <br />
            {play ?
                // �Ͻ����� ��ư
                (<button onClick={stop}>
                    �Ͻ�����
                </button>) :
                // ��� ��ư
                (<button onClick={start}>
                    ���
                </button>)
            }
        </>
    )
}

function TestComponent({count}) {
    return count>=10    ? <div>0:{count}</div> : <div>0:0{count}    </div>;
}



function SuiSou () {
  //const [images, setImages] = useState([]);
  //const navigate = useNavigate();

  //useEffect(() => {
  //  setImages(sheetImagesPath);
  //}, []);

  //const handleSelection = (filename) => {
  //  navigate('/audiostreamer', { state: { selectedSheetMusic: filename } });
  //};
   //const myRef = useRef < HTMLAudioElement > (null);
   //const [play, setPlay] = useRecoilState(playState);
    //const TestObj = 10;
    const [TestObj,setObj] = useState(0);
    const onClickPlay = () => {
        setObj(TestObj + 1);
    };
    const onClickStop = () => {
        setObj(0);
    };


   return (
        <Stack spacing={3}>
           <Text fontSize='50px' as='b'>Frere Jaques</Text>
           <Center>
               <audio
               controls
               src={song}>
               
               </audio>
           </Center>
           <Center>
           <TestComponent count={TestObj} />
           <div style={{display:'flex'}}>
            <button onClick={onClickPlay}>Play</button>
                   <button onClick={onClickPlay}>Pause</button>
                   <button onClick={onClickStop }>Stop</button>
               </div>
               </Center>
           <HStack>
               <Image
                   w="20%"
                   objectFit='cover'
                   src={dialTest}
                   alt='SuiSou'
               />
               <VStack>
                   <div class="item-box">
                       <div class="image">
                           <img src={sheet1} alt='SuiSou1'/> 
                               </div>
                       <div class="bar">
                           <img src={barimg} alt='SuiSou1' />
                           </div>
                       </div>
                    <Image
                    w="100%"
                    objectFit='cover'
                   src={sheet2}
                   alt='SuiSou2'
                />
               </VStack>
               </HStack>
            
        </Stack>
        
  );
};

export default SuiSou;
