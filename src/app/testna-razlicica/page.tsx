import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Testna različica | Klele.si Blog",
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
                <p className={'text-sm'}>23. februar 2025, Miha Medven</p>

                <h1>Testna različica na test.klele.si</h1>

                <p>Imel sem srečo. Otroci so bili zdravi in imel sem dovolj energije za programiranje. Sem tudi
                    razmislil, kako bi rad zapeljal projekt.</p>

                <h2>Kaj je sedaj narejeno?</h2>

                <h4>Frontend</h4>

                <p>Večino kode sem skopiral iz že obstoječega projekta, tako da je bilo treba v resnici samo zastaviti
                    okvirno arhitekturo in se odločiti, kako zapeljati dejstvo, da morajo ostati plače dostopne.</p>

                <p>Na koncu sem naredil preprost &rdquo;Prihaja kmalu!&rdquo; in vzpostavil povezave na Github ter na
                    ta blog. Za
                    začetek bo to več kot dovolj.</p>

                <div className="p-2 bg-beige">
                    <img src="/images/prihaja-kmalu.png" alt="Prikaz spletne strani z napisom 'Prihaja kmalu'"/>
                </div>

                <p>Čeprav sama spletna stran še nima nobene funkcionalnosti, je dovolj napredka, da jo lahko splavim in
                    začnem kazati okoli. Meni je predvsem ključno, da drugi ljudje lahko vidijo napredek. Le tako dobiš
                    povratne informacije glede tega ali se premikaš v pravo smer. Hkrati pa tudi kažeš drugim, da si se
                    resno lotil projekta.</p>

                <h4>Backend</h4>

                <p>Ko enkrat začneš lokalno povezovati zadeve, hitro ugotoviš, da ti manjkajo podatki. Predvsem sem malo
                    zgrešil strukturo in kako se API odziva na requeste.</p>

                <p>Večina strežnikov spoštuje &rdquo;accept&rdquo; headerje v requestih, in ti vračajo za header
                    primeren format. Različne knjižince (npr. Axios) v ozadju same dodajajo header
                    &rdquo;accept: application/json&rdquo;, ki ga potem strežnik prebere in vrne JSON response. Za
                    enkrat ne vidim potrebe po spoštovanju tega headerja in vedno vračam le JSON.</p>

                <p>Druga stvar je sama struktura podatkov, ki jih vračam. Včasih se ti splača na frontendu narediti več
                    klicov, spet drugič je lažje na backendu nadgraditi kak klic, da so vsi
                    podatki poslani skupaj. Ker se poskušam držati REST(ful) arhitekture, vsaj na začetku precej
                    eksperimentiram s tem, kakšna bo končna struktura.</p>

                <p>Te eksperimente si na začetku z veseljem privoščim, saj le jaz uporabljam ta API.</p>

                <h4>Deploy</h4>

                <p>Tukaj se je v resnici največ zgodilo.</p>

                <p>Za Next.js sem se med drugim tudi odločil, ker ima v resnici dober SSR (Server Side Rendering), kar
                    mi
                    omogoča dober SEO, hkrati pa mi olajša cachiranje rezultatov za neprijavljenje obiskovalce. Največja
                    pomanjkljivost SSR je predvsem v povezovanju med sistemi.</p>

                <p>Tako imamo 3 sisteme: </p>
                <ol>
                    <li>Client (frontend, ki se poganja v brskalniku)</li>
                    <li>SSR server</li>
                    <li>API server</li>
                </ol>


                <div className="p-10">
                    <img src="/images/sistemi.png" className={'w-full'} alt="Diagram za komunikacijo med sistemi"/>
                </div>

                <p>Odločil sem se, da bosta API klicala tako SSR server kot tudi koda v brskalniku. Kdo bo klical kaj,
                    bo odvisno od tega ali je uporabnik prijavljen ali ne.</p>


                <h4>Uporabnik ni prijavljen</h4>

                <p>SSR izvede klic na API, pridobi podatke, jih zapakira v HTML in vrne uporabniku.
                    Klasičen SSR pristop za namene SEO in hitrosti.</p>

                <h4>Uporabnik je prijavljen</h4>

                <p>SSR vrne uporabniku <i>prazno</i> client kodo, ki ob prikazu znotraj brskalnika naredi
                    klic na API, da prikaže prispevke.</p>

                <p>Ne bom uporabil Next.js kot BFF (Backend For Frontend), ker se bo client
                    povezoval direktno na API.</p>

                <h3>Github actions in testna različica</h3>

                <p>Celoten deployment gre prek Github actionov, ki se prek SSHja povežejo na mojo Digital Ocean
                    inštanco in naredijo kar morajo narediti. Za lažji razvoj sem ustvaril nov branch imenovan
                    &rdquo;develop&rdquo;, ki se avtomatsko servira na <a
                        href="https://test.klele.si">test.klele.si</a>.</p>

                <h2>Kaj sledi?</h2>

                <p>Prijava in možnost objavljanja prispevkov.</p>

            </div>
        </div>
    )
}