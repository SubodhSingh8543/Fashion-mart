
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image, Text,Divider } from "@chakra-ui/react";
import styles from "./Swiper.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// autoplay={{
//     delay: 2500,
//     disableOnInteraction: false,
//   }}
//   pagination={{
//     clickable: true,
//   }}
//   navigation={true}
//   modules={[Autoplay, Navigation]}

// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
// import styles from "../Pages/Home.module.css";

export default function SwiperImage({ SliderData1 ,heading}) {
    return (
        <>
            <Box marginTop={"50px"} marginLeft={"20px"} marginRight={"20px"}>

               <Text marginLeft={"20px"} fontSize={"25px"} textAlign={"start"} >{heading}</Text>

               <Divider marginBottom={"40px"} borderColor={"darkgray"}/>

                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                // autoplay={true} 
                >
                    {SliderData1?.map((el) => (
                        <Box >
                            <SwiperSlide className={styles.swiperClass} >
                                <Image w={"100%"} h={"450px"} src={el.img} alt="error" />
                                <Text marginTop={"10px"} marginBottom={"10px"}>{el.title}</Text>
                            </SwiperSlide>
                        </Box>
                    ))}


                    {/* <SwiperSlide>
                        <Image src="https://images.ctfassets.net/5de70he6op10/fs3J1GO3JjI6Wcy2KI3Lk/f8a9bc0a6312988f5194396d704304f8/463447579-mte_2.jpg?w=856&q=80&fm=jpg&fl=progressive" alt="error" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://images.ctfassets.net/5de70he6op10/fs3J1GO3JjI6Wcy2KI3Lk/f8a9bc0a6312988f5194396d704304f8/463447579-mte_2.jpg?w=856&q=80&fm=jpg&fl=progressive" alt="error" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://images.ctfassets.net/5de70he6op10/fs3J1GO3JjI6Wcy2KI3Lk/f8a9bc0a6312988f5194396d704304f8/463447579-mte_2.jpg?w=856&q=80&fm=jpg&fl=progressive" alt="error" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://images.ctfassets.net/5de70he6op10/fs3J1GO3JjI6Wcy2KI3Lk/f8a9bc0a6312988f5194396d704304f8/463447579-mte_2.jpg?w=856&q=80&fm=jpg&fl=progressive" alt="error" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://images.ctfassets.net/5de70he6op10/fs3J1GO3JjI6Wcy2KI3Lk/f8a9bc0a6312988f5194396d704304f8/463447579-mte_2.jpg?w=856&q=80&fm=jpg&fl=progressive" alt="error" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://images.ctfassets.net/5de70he6op10/fs3J1GO3JjI6Wcy2KI3Lk/f8a9bc0a6312988f5194396d704304f8/463447579-mte_2.jpg?w=856&q=80&fm=jpg&fl=progressive" alt="error" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://images.ctfassets.net/5de70he6op10/fs3J1GO3JjI6Wcy2KI3Lk/f8a9bc0a6312988f5194396d704304f8/463447579-mte_2.jpg?w=856&q=80&fm=jpg&fl=progressive" alt="error" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://images.ctfassets.net/5de70he6op10/fs3J1GO3JjI6Wcy2KI3Lk/f8a9bc0a6312988f5194396d704304f8/463447579-mte_2.jpg?w=856&q=80&fm=jpg&fl=progressive" alt="error" />
                    </SwiperSlide> */}
                </Swiper>
            </Box>
        </>
    );
}
