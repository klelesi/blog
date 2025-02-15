import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "API V1 | Klele.si Blog",
    description: "Zapisi ob ustvarjanju spletne strani klele.si.",
};

export default function Home() {
    return (
        <div className={'grid grid-cols-auto gap-6'}>
            {page()}
        </div>
    );
}

function page() {
    return (
        <div className={'container prose'}>
            <Link className={'mb-4 block'} href={{pathname: '/'}}>Nazaj</Link>

            <div className="card">
                <p className={'text-sm'}>15. februar 2025, Miha Medven</p>

                <h1>API V1</h1>

                <p>Čeprav se je v delu vmešalo življenje (bolni otroci), mi je uspelo narediti napredek pri izdelavi
                    APIja.</p>

                <h2>Trenutni napredek</h2>

                <p>Če slediš <a href="https://github.com/klelesi">razvoju na Github</a>, lahko vidiš, da sem dodal nov
                    repo. Za API, imenovam api. Domiselno, kajne?</p>

                <p>Rad razvijam po delih. Namesto vse naenkrat, dodajam funkcionalnosti po delih. Glede na
                    feedback. Če ni feedbacka, zadevo pustim na miru in se lotim tistih funkcionalnosti, ki jih je bolj
                    smiselno razvijati. MVP določa uporabnik, zato mora uporabnik zadevo uporabljati.</p>


                <p>Trenutno ima API le nekaj omejenih funkcionalnosti.</p>
                <p> Te so:
                    <ul>
                        <li>prijava prek Github</li>
                        <li>objava markdown in link prispevkov</li>
                        <li>komentiranje</li>
                    </ul>
                </p>

                <p>To je to. Testi so spisani.</p>

                <p> Vem, da se bodo zadeve spreminjale. Tako v delovanju kot v arhitekturi.
                    Ampak zato potrebujem feedback. In feedback za backend je frontend.</p>

                <h2>Kaj sledi?</h2>

                <p>Naslednji korak je frontend. V <a href="/mvp">prejšnji objavi</a> lahko
                    vidiš oblikovanje. Ampak to še ni vse. <a href="https://klele.si">Klele.si</a> že obstaja. Kot rečeno, to je druga iteracija spletne strani,
                    in sama spletna stran že več let gosti rezultate <a
                        href="https://klele.si/place/2024">ankete o plačah</a>.</p>

                <p>Zaradi tega mora frontend že v izhodišču podpirati obstoječe spletne strani, in na vrh tega potem dodajati zadeve iz Nikovega dizajna.</p>

                <p>Še vedno se bom zadeve lotil z Next.js in začel pri prenosu vsebin iz trenutne različice. Bom tudi ustvaril nov Github repo za frontend, in najprej zadeve lokalno povezal.</p>

                <p>Sedaj samo še upam, da otroci hitro ozdravijo, in da bom imel dovolj prostega časa, da se tega ASAP lotim. Priznam, da že dolgo nisem užival pri programiranju, kot uživam sedaj.</p>

            </div>
        </div>
    )
}