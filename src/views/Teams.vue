<template>
    <div id="teams" class=" bg-gray-700 md:w-11/12 mx-auto h-full">
        <ul class=" xl:w-full  grid md:grid-cols-2  md:rounded md:py-2 flex flex-wrap">
            <li
                id="card"
                class=" md:my-2 shadow  grid grid-cols-3 text-gray-100  items-center relative md:rounded-lg px-4 pb-4"
                v-for="team in teams"
                :key="team"
                :style="{
                    borderLeft: '5px solid' + team.color,
                    backgroundColor: team.color,
                    backgroundImage: `linear-gradient(315deg, ${team.color} 0%,${team.color2} 74%)`,
                }"
            >
                <div
                    class="flex my-2 h-16 justify-between items-center col-span-3 border-b-2 border-gray-600 pb-3"
                >
                    <img
                        id="logos"
                        class="w-12 rounded-full order-3 ml-auto col-start-3"
                        :src="team.image"
                        alt=""
                    />
                    <div class="flex items-center ">
                        <h1
                            class="order-2 whitespace-nowrap text-xl xl:text-2xl font-semibold uppercase flex items-center ml-3"
                        >
                            {{ team.name }}
                        </h1>
                        <h4 class="order-1 mr-auto text-4xl font-bold">{{ team.rank }}</h4>
                    </div>
                </div>
                <div
                    class="flex justify-between row-start-2 col-span-3 my-4 border-b-2 border-gray-600 "
                >
                    <div class=" w-full justify-between flex ">
                        <div
                            v-for="(driver, i) in team.drivers"
                            :key="driver"
                            class="flex border-r-2 border-gray-600  w-1/2 justify-between items-center xl:space-x-12 "
                        >
                            <h2
                                class="font-semibold xl:text-xl px-2 xl:px-0 flex flex-col items-center  justify-center xl:flex-row leading-5 xl:space-x-2 xl:pl-2"
                            >
                                <span class=" ">{{ driver.fname }}</span>
                                <span class="uppercase font-bold ">{{ driver.lname }}</span>
                            </h2>
                            <img class="w-12 " :src="team.drivers[i].avatar" alt="" />
                        </div>
                    </div>
                </div>
                <div class="col-span-3">
                    <img id="car" :src="team.car" alt="" />
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import merc from "../assets/images/merc.png"
import carMerc from "../assets/images/car-merc.png"
import bot from "../assets/images/bot.png"
import ham from "../assets/images/ham.png"
import rb from "../assets/images/rb.png"
import carRb from "../assets/images/car-rb.png"
import max from "../assets/images/max.png"
import alb from "../assets/images/alb.png"
import mc from "../assets/images/mc.png"
import carMc from "../assets/images/car-mc.png"
import sai from "../assets/images/sai.png"
import nor from "../assets/images/nor.png"
import rp from "../assets/images/rp.png"
import carRp from "../assets/images/car-rp.png"
import per from "../assets/images/per.png"
import str from "../assets/images/str.png"
import rn from "../assets/images/rn.png"
import ric from "../assets/images/ric.png"
import oco from "../assets/images/oco.png"
import carRn from "../assets/images/car-rn.png"
import fr from "../assets/images/fr.png"
import lec from "../assets/images/lec.png"
import vet from "../assets/images/vet.png"
import carFr from "../assets/images/car-fr.png"
import at from "../assets/images/at.png"
import kvy from "../assets/images/kvy.png"
import gas from "../assets/images/gas.png"
import carAt from "../assets/images/car-at.png"
import ar from "../assets/images/ar.png"
import gio from "../assets/images/gio.png"
import rai from "../assets/images/rai.png"
import carAr from "../assets/images/car-ar.png"
import hs from "../assets/images/hs.png"
import mag from "../assets/images/mag.png"
import fit from "../assets/images/fit.png"
import carHs from "../assets/images/car-hs.png"
import wl from "../assets/images/wl.png"
import lat from "../assets/images/lat.png"
import rus from "../assets/images/rus.png"
import carW from "../assets/images/car-w.png"
export default {
    data: () => ({
        teams: [
            {
                rank: 1,
                name: "mercedes",
                drivers: [
                    { fname: "Valtteri", lname: "Bottas", avatar: bot },
                    { fname: "Lewis", lname: "Hamilton", avatar: ham },
                ],
                image: merc,
                color: "#00d2be",
                color2: " #380036",
                car: carMerc,
            },
            {
                rank: 2,
                name: "red bull racing",
                drivers: [
                    { fname: "Max", lname: "Verstappen", avatar: max },
                    { fname: "Alexander", lname: "Albon", avatar: alb },
                ],
                image: rb,
                color: "#0600ef",
                color2: "rgb(13	16	33	)",
                car: carRb,
            },
            {
                rank: 3,
                name: "mcLaren",
                drivers: [
                    { fname: "Carlos", lname: "Sainz", avatar: sai },
                    { fname: "Lando", lname: "Norris", avatar: nor },
                ],
                image: mc,
                color: "#ff8700",
                color2: "rgb(3	42	97	)",
                car: carMc,
            },
            {
                rank: 4,
                name: "racing point",
                drivers: [
                    { fname: "Sergio", lname: "Perez", avatar: per },
                    { fname: "Lance", lname: "Stroll", avatar: str },
                ],
                image: rp,
                color: "#f596c8",
                color2: "rgb(0	64	193	)",
                car: carRp,
            },
            {
                rank: 5,
                name: "renault",
                drivers: [
                    { fname: "Daniel", lname: "Ricciardo", avatar: ric },
                    { fname: "Esteban", lname: "Ocon", avatar: oco },
                ],
                image: rn,
                color: "#fff500",
                color2: "rgb(33	34	34	)",
                car: carRn,
            },
            {
                rank: 6,
                name: "ferrari",
                drivers: [
                    { fname: "Charles", lname: "Leclerc", avatar: lec },
                    { fname: "Sebastian", lname: "Vettel", avatar: vet },
                ],
                image: fr,
                color: "#dc0000",
                color2: "rgb(7	6	9	)",
                car: carFr,
            },
            {
                rank: 7,
                name: "alphaTauri",
                drivers: [
                    { fname: "Daniil", lname: "Kvyat", avatar: kvy },
                    { fname: "Pierre", lname: "Gasly", avatar: gas },
                ],
                image: at,
                color: "#f5f2d0",
                color2: "rgb(7	19	32	)",
                car: carAt
            },
            {
                rank: 8,
                name: "alfa romeo racing",
                drivers: [
                    { fname: "Kimi", lname: "Raikkonen", avatar: rai },
                    { fname: "Antonio", lname: "Giovinazzi", avatar: gio },
                ],
                image: ar,
                color: "#960000",
                color2: "rgb(170	190	220	)",
                car: carAr
            },
            {
                rank: 9,
                name: "haas f1 team",
                drivers: [
                    { fname: "Kevin", lname: "Magnussen", avatar: mag },
                    { fname: "Pietro", lname: "Fittipaldi", avatar: fit },
                ],
                image: hs,
                color: "#787878",
                color2: "rgb(18	17	18	)",
                car: carHs
            },
            {
                rank: 10,
                name: "williams",
                drivers: [
                    { fname: "Nicholas", lname: "Latifi", avatar: lat },
                    { fname: "George", lname: "Russell", avatar: rus },
                ],
                image: wl,
                color: "#0082fa",
                color2: "rgb(116	136	158		)",
                car: carW
            },
        ],
    }),
}
</script>
<style lang="scss" scoped>
#teams {
    margin-top: 10vh;
}
#logos {
    min-width: 64px;
    max-width: 64px;
    min-height: 64px;
    max-height: 64px;
}
li:nth-child(odd) {
    @media screen and (min-width: 768px) {

    margin-right: 1rem;
    }
}
</style>
