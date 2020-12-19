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
                    class="absolute text-4xl font-bold bg-black opacity-75 rounded px-2 py-1 z-20"
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
                            class="order-2 text-white whitespace-nowrap text-xl xl:text-2xl font-semibold uppercase flex items-center ml-3 space-x-3"
                        >
                            <span class=" ">{{ driver.fname }}</span>
                            <span class="uppercase font-bold ">{{ driver.lname }}</span>
                        </h1>
                        <h1 class="order-1 mr-auto text-4xl font-bold">{{ driver.rank }}</h1>
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
import per from "../assets/images/per.png"
import perWin from "../assets/images/per-win.png"
import flag4 from "../assets/images/flag-4.jpg"
import str from "../assets/images/str.png"
import ric from "../assets/images/ric.png"
import ricWin from "../assets/images/ric-win.png"
import flag5 from "../assets/images/flag-5.jpg"
import oco from "../assets/images/oco.png"
import lec from "../assets/images/lec.png"
import vet from "../assets/images/vet.png"
import kvy from "../assets/images/kvy.png"
import hul from "../assets/images/hul.png"
import gas from "../assets/images/gas.png"
import gio from "../assets/images/gio.png"
import gro from "../assets/images/gro.png"
import rai from "../assets/images/rai.png"
import mag from "../assets/images/mag.png"
import rus from "../assets/images/rus.png"
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
                name: "Daniel",
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
            { rank: 8, fname: "Charles", lname: "Leclerc", avatar: lec, color: "#dc0000" },
            { rank: 9, fname: "Lando", lname: "Norris", avatar: nor, color: "#ff8700" },
            { rank: 10, fname: "Pierre", lname: "Gasly", avatar: gas, color: "#f5f2d0" },
            { rank: 11, fname: "Lance", lname: "Stroll", avatar: str, color: "#f596c8" },
            { rank: 12, fname: "Esteban", lname: "Ocon", avatar: oco, color: "#fff500" },
            { rank: 13, fname: "Sebastian", lname: "Vettel", avatar: vet, color: "#dc0000" },
            { rank: 14, fname: "Daniil", lname: "Kvyat", avatar: kvy, color: "#f5f2d0" },
            { rank: 15, fname: "Nico", lname: "Hulkenberg", avatar: hul, color: "#f596c8" },
            { rank: 16, fname: "Kimi", lname: "Raikkonen", avatar: rai, color: "#960000" },
            { rank: 17, fname: "Antonio", lname: "Giovinazzi", avatar: gio, color: "#960000" },
            { rank: 18, fname: "George", lname: "Russell", avatar: rus, color: "#0082fa" },
            { rank: 19, fname: "Romain", lname: "Grosjean", avatar: gro, color: "#0082fa" },
            { rank: 20, fname: "Kevin", lname: "Magnussen", avatar: mag, color: "#787878" },
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
