<template>
    <div id="drivers" class=" bg-gray-700 md:w-11/12 mx-auto h-full">
        <ul class=" xl:w-full  grid md:grid-cols-2   rounded md:py-2 flex flex-wrap">
            <li
                id="card"
                class=" md:my-2 shadow  grid grid-cols-3 text-white  items-center relative md:rounded-lg px-4"
                v-for="driver in drivers"
                :key="driver"
                :style="{
                    borderLeft: '5px solid' + driver.color,
                    backgroundColor: driver.color,
                    backgroundImage: `linear-gradient(315deg, ${driver.color} 0%,${driver.color2} 74%)`,
                }"
            >
                <div
                    class="absolute w-full h-full px-4 pt-20 capitalize font-semibold text-sm"
                    style="right: 0; top; 0"
                >
                    <div class="flex justify-end text-gray-300">
                        {{ driver.team }}
                    </div>
                </div>
                <div
                    class="absolute rounded opacity-25 w-full  flex justify-end"
                    style="zIndex: 0; right: 0; top: 2px;"
                >
                    <img
                        class="w-full object-cover rounded"
                        style="height: 282px; filter: blur(3.5px)"
                        :src="driver.win"
                        alt=""
                    />
                </div>
                <div class="absolute text-6xl font-bold italic " style="left: 1rem; bottom: 1rem;">
                    <h1>
                        {{ driver.number }}
                    </h1>
                </div>
                <div
                    class="absolute text-4xl font-bold bg-black opacity-75 rounded px-2 py-1 z-10"
                    style="right: 1rem; bottom: 1rem;"
                >
                    <span>{{ driver.points }}<span class="text-2xl">pts</span></span>
                </div>
                <div
                    class="flex my-2 h-16 justify-between items-center col-span-3 border-b-2 border-gray-600 pb-3"
                >
                    <img
                        id="logos"
                        class="w-16 rounded order-3 ml-auto col-start-3"
                        :src="driver.flag"
                        alt=""
                    />
                    <div class="flex items-center z-10 ">
                        <h1
                            class="order-2 text-white whitespace-nowrap text-xl uppercase flex flex-col leading-5 items-center ml-4"
                        >
                            <span class=" fname">{{ driver.fname }}</span>
                            <span class="uppercase font-bold lname">{{ driver.lname }}</span>
                        </h1>
                        <h1 class="order-1 mr-auto rank font-bold">{{ driver.rank }}</h1>
                    </div>
                </div>

                <div class="col-span-3 flex justify-center" style="zIndex: 1">
                    <img id="pilot" :src="driver.avatar" alt="" />
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import bot from "../assets/images/bot.png"
import botWin from "../assets/images/bot-win.png"
import flag2 from "../assets/images/flag-2.jpg"
import ham from "../assets/images/ham.png"
import hamWin from "../assets/images/ham-win.png"
import uk from "../assets/images/uk.jpg"
import max from "../assets/images/max.png"
import verWin from "../assets/images/ver-win.png"
import flag3 from "../assets/images/flag-3.jpg"
import alb from "../assets/images/alb.png"
import flag7 from "../assets/images/flag-7.jpg"
import albWin from "../assets/images/alb-win.png"
import sai from "../assets/images/sai.png"
import saiWin from "../assets/images/sai-win.png"
import flag6 from "../assets/images/flag-6.jpg"
import nor from "../assets/images/nor.png"
import norWin from "../assets/images/nor-win.png"
import per from "../assets/images/per.png"
import perWin from "../assets/images/per-win.png"
import flag4 from "../assets/images/flag-4.jpg"
import str from "../assets/images/str.png"
import strWin from "../assets/images/str-win.png"
import flag11 from "../assets/images/flag-11.jpg"
import ric from "../assets/images/ric.png"
import ricWin from "../assets/images/ric-win.png"
import flag5 from "../assets/images/flag-5.jpg"
import oco from "../assets/images/oco.png"
import ocoWin from "../assets/images/oco-win.png"
import flag12 from "../assets/images/flag-12.jpg"
import lec from "../assets/images/lec.png"
import flag8 from "../assets/images/flag-8.jpg"
import lecWin from "../assets/images/lec-win.png"
import vet from "../assets/images/vet.png"
import vetWin from "../assets/images/vet-win.png"
import flag13 from "../assets/images/flag-13.jpg"
import kvy from "../assets/images/kvy.png"
import kvyWin from "../assets/images/kvy-win.png"
import flag14 from "../assets/images/flag-14.jpg"
import hul from "../assets/images/hul.png"
import hulWin from "../assets/images/hul-win.png"
import flag15 from "../assets/images/flag-15.jpg"
import gas from "../assets/images/gas.png"
import gasWin from "../assets/images/gas-win.png"
import flag10 from "../assets/images/flag-10.jpg"
import gio from "../assets/images/gio.png"
import gioWin from "../assets/images/gio-win.png"
import flag17 from "../assets/images/flag-17.jpg"
import gro from "../assets/images/gro.png"
import groWin from "../assets/images/gro-win.png"
import rai from "../assets/images/rai.png"
import raiWin from "../assets/images/rai-win.png"
import flag16 from "../assets/images/flag-16.jpg"
import mag from "../assets/images/mag.png"
import magWin from "../assets/images/mag-win.png"
import flag20 from "../assets/images/flag-20.jpg"
import rus from "../assets/images/rus.png"
import rusWin from "../assets/images/rus-win.png"
export default {
    data: () => ({
        drivers: [
            {
                rank: 1,
                team: "mercedes",
                fname: "Lewis",
                lname: "Hamilton",
                avatar: ham,
                number: 44,
                points: 347,
                color: "#00d2be",
                color2: " #380036",
                flag: uk,
                win: hamWin,
            },
            {
                rank: 2,
                team: "mercedes",
                fname: "Valtteri",
                lname: "Bottas",
                avatar: bot,
                number: 77,
                points: 223,
                flag: flag2,
                color: "#00d2be",
                color2: " #380036",
                win: botWin,
            },
            {
                rank: 3,
                team: "red bull racing",
                fname: "Max",
                lname: "Verstappen",
                avatar: max,
                number: 33,
                points: 214,
                flag: flag3,
                color: "#0600ef",
                color2: "rgb(13	16	33	)",
                win: verWin,
            },

            {
                rank: 4,
                team: "renault",
                fname: "Sergio",
                lname: "Perez",
                avatar: per,
                number: 11,
                points: 125,
                flag: flag4,
                color: "#f596c8",
                color2: "rgb(0	64	193	)",
                win: perWin,
            },
            {
                rank: 5,
                team: "renault",
                fname: "Daniel",
                lname: "Ricciardo",
                avatar: ric,
                number: 3,
                points: 119,
                flag: flag5,
                color: "#fff500",
                color2: "rgb(33	34	34	)",
                win: ricWin,
            },
            {
                rank: 6,
                team: "mcLaren",
                fname: "Carlos",
                lname: "Sainz",
                avatar: sai,
                number: 55,
                points: 105,
                flag: flag6,
                color: "#ff8700",
                color2: "rgb(3	42	97	)",
                win: saiWin,
            },
            {
                rank: 7,
                team: "red bull racing",
                fname: "Alexander",
                lname: "Albon",
                avatar: alb,
                number: 23,
                points: 105,
                color: "#0600ef",
                win: albWin,
                color2: "rgb(13	16	33	)",
                flag: flag7,
            },
            {
                rank: 8,
                team: "ferrari",
                fname: "Charles",
                lname: "Leclerc",
                avatar: lec,
                number: 16,
                points: 98,
                color: "#dc0000",
                color2: "rgb(7	6	9	)",
                win: lecWin,
                flag: flag8,
            },
            {
                rank: 9,
                team: "mcLaren",
                number: 4,
                points: 97,
                fname: "Lando",
                lname: "Norris",
                avatar: nor,
                color: "#ff8700",
                color2: "rgb(3	42	97	)",
                flag: uk,
                win: norWin,
            },
            {
                rank: 10,
                team: "alphaTauri",
                fname: "Pierre",
                lname: "Gasly",
                number: 10,
                points: 75,
                avatar: gas,
                color: "#f5f2d0",
                color2: "rgb(7	19	32	)",
                win: gasWin,
                flag: flag10,
            },
            {
                rank: 11,
                team: "racing point",
                fname: "Lance",
                lname: "Stroll",
                number: 18,
                points: 75,
                avatar: str,
                color: "#f596c8",
                color2: "rgb(0	64	193	)",
                flag: flag11,
                win: strWin,
            },
            {
                rank: 12,
                team: "renault",
                fname: "Esteban",
                lname: "Ocon",
                number: "",
                points: 62,
                avatar: oco,
                color: "#fff500",
                color2: "rgb(33	34	34	)",
                win: ocoWin,
                flag: flag12,
            },
            {
                rank: 13,
                team: "ferrari",
                fname: "Sebastian",
                lname: "Vettel",
                number: 5,
                points: 33,
                avatar: vet,
                color: "#dc0000",
                color2: "rgb(7	6	9	)",
                win: vetWin,
                flag: flag13,
            },
            {
                rank: 14,
                team: "alphaTauri",
                fname: "Daniil",
                lname: "Kvyat",
                number: 26,
                points: 32,
                avatar: kvy,
                color: "#f5f2d0",
                color2: "rgb(7	19	32	)",
                win: kvyWin,
                flag: flag14,
            },
            {
                rank: 15,
                team: "racing point",
                fname: "Nico",
                lname: "Hulkenberg",
                number: 27,
                points: 10,
                avatar: hul,
                color: "#f596c8",
                color2: "rgb(0	64	193	)",
                win: hulWin,
                flag: flag15,
            },
            {
                rank: 16,
                team: "alfa romeo racing",
                fname: "Kimi",
                lname: "Raikkonen",
                number: 7,
                points: 4,
                avatar: rai,
                color: "#960000",
                color2: "rgb(7	6	9	)",
                win: raiWin,
                flag: flag16,
            },
            {
                rank: 17,
                team: "alfa romeo racing",
                fname: "Antonio",
                lname: "Giovinazzi",
                number: 99,
                points: 4,
                avatar: gio,
                color: "#960000",
                color2: "rgb(7	6	9	)",
                win: gioWin,
                flag: flag17,
            },
            {
                rank: 18,
                team: "williams",
                number: 63,
                points: 3,
                fname: "George",
                lname: "Russell",
                avatar: rus,
                color: "#0082fa",
                color2: "rgb(116	136	158		)",
                win: rusWin,
                flag: uk,
            },
            {
                rank: 19,
                team: "haas f1 team",
                fname: "Romain",
                lname: "Grosjean",
                number: 8,
                points: 2,
                avatar: gro,
                color: "#787878",
                color2: "rgb(18	17	18	)",
                win: groWin,
                flag: flag12
            },
            {
                rank: 20,
                team: "haas f1 team",
                fname: "Kevin",
                lname: "Magnussen",
                number: 20,
                points: 1,
                avatar: mag,
                color: "#787878",
                color2: "rgb(18	17	18	)",
                win: magWin,
                flag: flag20
            },
        ],
    }),
}
</script>
<style lang="scss" scoped>
#drivers {
    margin-top: 10vh;
}
li:nth-child(odd) {
    @media screen and (min-width: 768px) {
        margin-right: 1rem;
    }
}
h1 {
    text-shadow: 2px 2px #1f1f1f;
}
</style>
