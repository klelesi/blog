import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Spoznavanje problemov | Klele.si Blog",
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
                <p className={'text-sm'}>3. februar 2025, Miha Medven</p>

                <h1>Spoznavanje problemov</h1>

                <p>Vedno začneš na začetku. Zame je to dobro razumevanje problema. Šele ko dobro razumeš problem, ga
                    lahko začneš reševati.</p>

                <h2>Problem #1: Facebook</h2>

                <p><a href="https://www.facebook.com/groups/developerji">Facebook skupina Slovenski
                    developerji</a> šteje prek 18 tisoč članov. Od tega jih je dobrih 12 tisoč aktivnih.</p>

                <p>Velikokrat rečem, da se je ta skupnost razvila kljub temu, da gostujemo na Facebooku. Facebook ima
                    svoje algoritme, ki določajo kaj člani vidimo, in česa ne. Velikokrat briše samovoljno objave brez
                    kakršnegakoli obvestila avtorju, ali administratorjem.</p> <p>Orodja za upravljanje skupine se na
                mesečni ravni spreminjajo, in
                v osmih letih odkar sem administrator, nisem zabeležil nobene spremembe, ki bi mi pomagala pri
                upravljanju s skupnostjo. Skoraj dnevno se zgodi, da dobim sporočilo, da naj odobrim neko objavo, ker jo
                je Facebook samovoljno označil za neprimerno.
            </p>

                <h2>Problem #2: Pomanjkljive funkcionalnosti</h2>


                <p>Facebook kot orodje ima kar nekaj pomanjkljivosti:</p>
                <ul>
                    <li>nemogoče je iskati pretekle objave, saj se vsebina izgubi v poplavi drugih objav</li>
                    <li>nezanesljivo prikazovanje objav, saj se glede na algoritem nekatere objave večkrat pokažejo kot
                        druge (in ne pomaga nastavitev za prikaz najnovejših objav)
                    </li>
                    <li>orodja za boj proti spamu so neverjetno pomanjkljiva (večkrat nekaj označi kot spam kar v
                        resnici ni, kot obratno)
                    </li>
                    <li>ni prilagojeno specifikam naše skupnosti, saj so vse objave &quot;enake&quot; (objave za delo
                        vs. meetup/dogodek vs. tehnična vsebina)
                    </li>
                    <li>skupina je zasebna, tako da moraš biti uporabnik Facebooka kot tudi član skupine</li>
                </ul>

                <h2>Problem #3: Interes slovenske razvijalske skupnosti</h2>

                <p>Bodimo odkriti. Čeprav smo največja slovenska razvijalska skupnost, smo v celoti nepomembni za
                    Facebook. Interesi skupnosti so v celoti nezastopani, ko pride do razvoja samega orodja.</p>

                <p>Pomembno je, da se specifike naše skupnosti tudi poznajo v samem orodju, saj nas te specifike delajo
                    drugačne od vseh ostalih skupnosti.</p>

            </div>
        </div>
    )
}