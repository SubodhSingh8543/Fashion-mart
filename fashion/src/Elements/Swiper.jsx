
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image, Text,Divider,Flex } from "@chakra-ui/react";
import styles2 from "./Swiper.module.css";

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
console.log(SliderData1);

    return (
        <>
            <Box  marginTop={"50px"} marginLeft={"20px"} marginRight={"20px"}>

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
                        // <Box className={styles.swiperBox} >
                            <SwiperSlide key={el.id} className={styles2.swiperClass} >
                                <Image w={"100%"} h={"450px"} margin={"auto"} src={el.img} alt="error" />
                              
                                <Text  marginTop={"10px"}>{el.title}</Text>
                            
                            </SwiperSlide>
                        // </Box>
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


// import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Box, Image, Heading, Flex } from "@chakra-ui/react";
// import { StarIcon } from "@chakra-ui/icons";
// // Import Swiper styles
// // import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import styles from "./Swiper.module.css";
// // import "./styles.css";

// // import required modules
// import { Autoplay, Navigation } from "swiper";

// const SliderData = [
//   {
//     img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2019/10/Antifreeze.jpg",
//     title: "AntiFreeze",
//     id: 1,
//   },

//   {
//     img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2019/seafoam.jpg",
//     title: "Fuel Treatments",
//     id: 2,
//   },

//   {
//     img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/Top-Categories-4-Thermostats.png",
//     title: "Thermostats",
//     id: 3,
//   },

//   {
//     img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/Top-Categories-14-Floor-Mats.png",
//     title: "Floor Mats",
//     id: 4,
//   },

//   {
//     img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/04-CQ-Radiator.jpg",
//     title: "Radiator",
//     id: 5,
//   },

//   {
//     img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/12-AC-Seat-Covers.jpg",
//     title: "Seat Covers",
//     id: 6,
//   },

//   {
//     img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/landing/battery/diehard/HP-Category-Grid-DieHard-Gold-95x95.jpg",
//     title: "Batteries",
//     id: 7,
//   },

//   {
//     img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/TC-Brakes.jpg",
//     title: "Break Pads & Shoes",
//     id: 8,
//   },

//   {
//     img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/TC-FRAM-Oil-and-Filter.jpg",
//     title: "Oil Change Bundles",
//     id: 9,
//   },

//   {
//     img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/hm-topcat-wipers.jpg",
//     title: "Wipers",
//     id: 10,
//   },

//   {
//     img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/flyer-lg.jpg",
//     title: "Sales Flayer",
//     id: 11,
//   },

//   {
//     img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2018/07/brake-rotors.jpg",
//     title: "Rotors & Drum",
//     id: 12,
//   },
// ];

// export default function SwiperImage({ SliderData1 ,heading}) {
//   console.log(SliderData1);
  
//     return (
//     <>
//       <Swiper
//         slidesPerView={6}
//         spaceBetween={20}
//         slidesPerGroup={1}
//         loop={true}
//         loopFillGroupWithBlank={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         navigation={true}
//         modules={[Autoplay, Navigation]}
//         className="mySwiper"
//       >
//         {/* {SliderData1?.map((el) => (
//           <SwiperSlide className={styles?.swiperClass}>
//             <Image margin={"auto"} h={"120px"} src={el?.img} alt="error" />

//             <Heading lineHeight={"28px"} fontSize={"20px"} marginTop={"20px"}>
//               {el.title}
//             </Heading>
//             <Flex alignItems={"center"} justifyContent={"center"}>
//               <StarIcon color={"#FFCC02"} />
//               <StarIcon color={"#FFCC02"} />
//               <StarIcon color={"#FFCC02"} />
//               <StarIcon color={"grey"} />
//             </Flex>
//           </SwiperSlide>
//         ))} */}
//       </Swiper>
//     </>
//   );
// }