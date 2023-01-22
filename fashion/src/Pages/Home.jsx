
import { Grid, Box, Image, Flex,Divider, GridItem, SimpleGrid,Text,Heading,Link } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import SwiperImage from "../Elements/Swiper";
import styles from "./Home.module.css";
import {Navigate} from "react-router-dom";
import { useEffect } from "react";

const SliderData1 = [
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/68319789_903_b?$an-category$&qlt=80&fit=constrain",
        title:"Arctic Monogram Ornament",
        id:1
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/64784432_006_b?$an-category$&qlt=80&fit=constrain",
        title:"Ernestine Bath Mat",
        id:2
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/65889495_097_b?$an-category$&qlt=80&fit=constrain",
        title:"Wishbone Bracket",
        id:3
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/53062006_040_b2?$an-category$&qlt=80&fit=constrain",
        title:"Flora Taper Candlestick",
        id:4
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/81368094_011_b?$an-category$&qlt=80&fit=constrain",
        title:"titled Margot Monogram Mug",
        id:5
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/68798297_033_b10?$an-category$&qlt=80&fit=constrain",
        title:"Endless Rose Mini Sweater Dress",
        id:6
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/79266219_066_b?$an-category$&qlt=80&fit=constrain",
        title:"Wishbone Bracket",
        id:7
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/45332233AM_000_b?$an-category$&qlt=80&fit=constrain",
        title:"Gold Oval Drop Earrings",
        id:8
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4112522160066_001_b?$an-category$&qlt=80&fit=constrain",
        title:"Flora Taper Candlestick",
        id:9
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/79757084_066_b?$an-category$&qlt=80&fit=constrain",
        title:"Heart Trinket Dish",
        id:10
    }
]


const SliderData2 = [
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4123650590131_001_b?$an-category$&qlt=80&fit=constrain",
        title:"The Colette Cropped Wide-Leg Pants",
        id:1
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/64600158_060_b2?$an-category$&qlt=80&fit=constrain",
        title:"Capri Blue x Pura Home Fragrance Oil Refill",
        id:2
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4123650590249_041_b2?$an-category$&qlt=80&fit=constrain",
        title:"Jo Faulkner Colette Cropped Wide-Leg Pants",
        id:3
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4112017560206_011_b2?$an-category$&qlt=80&fit=constrain",
        title:"Tiny Hartford Embroidered Top",
        id:4
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/52733375_011_b?$an-category$&qlt=80&fit=constrain",
        title:"Capri Blue Capiz Jar Candle",
        id:5
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4114529100236_011_b2?$an-category$&qlt=80&fit=constrain",
        title:"By Anthropologie Cropped Mock-Neck Sweater",
        id:6
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/52733466_011_b10?$an-category$&qlt=80&fit=constrain",
        title:"Capri Blue Capiz Mini Jar Candle",
        id:7
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/47859319_001_b?$an-category$&qlt=80&fit=constrain",
        title:"Birthday E-Gift Card",
        id:8
    }
]


function Home() {

    return (
        <>
            <SimpleGrid columns={[1, 2, 2, 4]} spacing='40px' className={styles.paddinLeft}>
                <GridItem>
                    <Image w={"100%"} src="https://images.ctfassets.net/5de70he6op10/1ggDBqP8ZI5yHRgwSGmKJD/8d512b287a61b6bab0ae2c1bf1d387f3/463447543-ls_m0_banner_a.jpg?w=630&q=80&fm=webp" alt="Error" />
                </GridItem>

                <GridItem>
                    <Image w={"100%"} src="https://images.ctfassets.net/5de70he6op10/45zaqu5WmFVrpxnyWq4awL/492db526a888d7d9754da0cb5ab33f38/463447550-ls_m0_banner_b.jpg?w=630&q=80&fm=webp" alt="Error" />
                </GridItem>
                 
                <GridItem>
                    <Image w={"100%"} src="https://images.ctfassets.net/5de70he6op10/77AQS4fqFBgZAtuoYp5Jh3/1781a13eb6b6a92de72962d55f6cfd5b/463447552-ls_m0_banner_c.jpg?w=630&q=80&fm=webp" alt="Error" />
                </GridItem>

                <GridItem>
                    <Image w={"100%"} src="https://images.ctfassets.net/5de70he6op10/4bNIjTyL9rugEk88P917Ww/241171fda2c8815a6c5d1b3e599c63ec/463447554-ls_m0_banner_d.jpg?w=630&q=80&fm=webp" alt="Error" />
                </GridItem>
            </SimpleGrid>

            <SimpleGrid columns={[1]} spacing='40px' className={styles.paddinLeft}>
                <GridItem>
                    <Image src="https://images.ctfassets.net/5de70he6op10/77JavUQ5WftmGEzEB6tjUx/abea8ee44b2d05d8499cb7ccf1fa7b6b/463447556-ls_m1.jpg?w=2694&q=80&fm=webp" alt={"error"} />
                </GridItem>
            </SimpleGrid>

            <SimpleGrid columns={[1, 2, 3]} spacing='40px' marginTop={"30px"} className={styles.paddinLeft}>
                <Box>
                    <Image src="https://images.ctfassets.net/5de70he6op10/1mdJaJQGG11g0YRX6w70mT/426e6d72a18b8ec225b753011ed68f4b/463447559-ls_m2a.jpg?w=856&q=80&fm=webp" alt="Error" />
                </Box>

                <Box>
                    <Image src="https://images.ctfassets.net/5de70he6op10/11RJEcC9BZbOe6ryVoY2Wx/367938f0e980b77d6778774df3a9bc53/463447562-ls_m2b.jpg?w=856&q=80&fm=webp" alt="Error" />
                </Box>

                <Box>
                    <Image src="https://images.ctfassets.net/5de70he6op10/4HB7jlHV89a30Fj6aQLUSQ/a78b590235a712f2ce57dc40620fb08e/463447565-ls_m2c.jpg?w=856&q=80&fm=webp" alt="Error" />
                </Box>

            </SimpleGrid>

            <Image width={"98.5%"} marginTop={"30px"} className={styles.paddinLeft} src="https://images.ctfassets.net/5de70he6op10/6LHRhljgKFw6YzWmOceaQS/26f6e98eb8b93b759a92cb8e6551b457/463447570-ls_m3.jpg?w=2694&q=80&fm=webp" alt="error"/>
            
            <Image width={"98.5%"} marginTop={"30px"} className={styles.paddinLeft} src={"https://images.ctfassets.net/5de70he6op10/6M08flgdJTLqDZC2u9Rl2Y/c7746116145d9ec7942a48790ec72b80/463447573-ls_m4.jpg?w=2694&q=80&fm=webp"} alt="error"/>


            <Image width={"98.5%"} marginTop={"30px"} className={styles.paddinLeft} src={"https://images.ctfassets.net/5de70he6op10/6nUYEvFH2JxdQK4FTbbSp5/f94f031742f4ee7d5eaa6c619bff9e77/463447574-ls_m5.jpg?w=2190&q=80&fm=webp"} alt="error"/>

            <SwiperImage className={styles.paddinLeft} SliderData1={SliderData1} heading={"You May Also Like"}/>

            <SwiperImage className={styles.paddinLeft} SliderData1={SliderData2} heading={"Recently Viewed"}/>

            <Box className={styles.paddinLeft} marginTop={10}>
                <Text fontFamily={"Spectral Extra Light"} fontSize={30}>
                  More to Explore
                </Text>
                <Divider borderColor="grey"/>
                <br />
            </Box>

            <SimpleGrid columns={[1,null,3]} gap={5} className={styles.paddinLeft}>
             <Flex direction={"column"} gap={5}>
                <Image src="https://images.ctfassets.net/5de70he6op10/6FaviHHW4c6sY7eosMxfU1/2f486f1f0e827cbce97559057c6ea6f8/463447578-mte_1.jpg?w=856&q=80&fm=webp" alt="Error"/>
                <Text fontSize={30} fontFamily={"Times"} textAlign={"start"}>
                 BHLDN x TERRAIN: Vow To Wow Giveaway
                </Text>
                <Text  textAlign={"start"}>We're treating one lucky bride to an unforgettable wedding gift.</Text>
                <Link  textAlign={"start"} color={"#167a92"}>enter to win</Link>
             </Flex>

             <Flex direction={"column"} gap={5}>
                <Image src="https://images.ctfassets.net/5de70he6op10/fs3J1GO3JjI6Wcy2KI3Lk/f8a9bc0a6312988f5194396d704304f8/463447579-mte_2.jpg?w=856&q=80&fm=jpg&fl=progressive" alt="Error"/>
                <Text fontSize={30} fontFamily={"Times"} textAlign={"start"}> 
                 BHLDN x TERRAIN: Vow To Wow Giveaway
                </Text>
                <Text  textAlign={"start"}>We're treating one lucky bride to an unforgettable wedding gift.</Text>
                <Link  textAlign={"start"} color={"#167a92"}>enter to win</Link>
             </Flex>

             <Flex direction={"column"} gap={5}>
                <Image src="https://images.ctfassets.net/5de70he6op10/DhaDiaJTiezp0tyGOrlXy/59e3a1b6ce5b2d76e01163ea9b919ea0/463447581-mte_3.jpg?w=856&q=80&fm=jpg&fl=progressive" alt="Error"/>
                <Text fontSize={30} fontFamily={"Times"} textAlign={"start"}>
                 BHLDN x TERRAIN: Vow To Wow Giveaway
                </Text>
                <Text  textAlign={"start"}>We're treating one lucky bride to an unforgettable wedding gift.</Text>
                <Link  textAlign={"start"} color={"#167a92"}>enter to win</Link>
             </Flex>
            </SimpleGrid>
            {/* <br /> */}
            <Divider width={"98.5%"} borderColor="grey" className={styles.paddinLeft}/>
            <br />
        </>
    )
}

export default Home;