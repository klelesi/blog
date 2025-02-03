import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Začetek številka dve | Klele.si Blog",
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
                <p className={'text-sm'}>2. februar 2025, Miha Medven</p>

                <h1>Začetek številka dve</h1>

                <p>Zopet se srečava. Miha in nov projekt. Teh je bilo skozi leta več, od Youtube videov, masterclassov,
                    spletnega slovarja sopomenk in drugih.</p>

                <p>Tokrat bo projekt nova iteracija <a href="https://klele.si">Klele.si</a>.</p>

                <h2>Zgodovina</h2>

                <p>Leta 2021 sem bil med projekti. Bilo mi je dolgčas in hotel sem se naučiti novega frameworka. <a
                    href="https://nextjs.org/">NextJS</a> je takrat ravno popularen postajal, in sem rekel, da bi se ga
                    rad naučil. Zelo nerad se učim &quot;na suho&quot;, zato sem sem se že takrat odločil, da naredim
                    klele.si.
                    Zmes Reddita in foruma, s pridihom Facebook skupine.</p>

                <p>Vse skupaj je trajalo kak mesec, da sem zgradil prvo različico. Uporabniki so se lahko registrirali,
                    objavljali prispevke/povezave, in komentirali. Čeprav je zadeva delovala, je nisem
                    nikoli &quot;uradno&quot;
                    splavil. Prišli so novi projekti, motivacija je padla, predvsem pa dvom, da ljudje sploh potrebujejo
                    nekaj takega.</p>

                <p>Danes, štiri leta kasneje, se projekta lotevam ponovono. Tokrat malo bolj zares.</p>

                <h2>Kaj se je spremenilo?</h2>

                <p>Ne želim biti odvisen od drugih platform. Ne želim biti podvržen razvoju pri katerem nimam moč
                    vplivati na razvoj funkcionalnosti. Če pogledam Facebook skupino Slovenski developerji, se je ta v
                    zadnjih letih razvila samo v številu članov, ne pa po kvaliteti
                    vsebine ali načinu povezovanja.</p>

                <p>Zato tudi ne želim uporabiti &quot;drugih&quot; platform, ker pridemo do enake težave. Podvržen si
                    interesom
                    drugih, ne interesom skupnosti. Včasih je bil Twitter super kul platforma, nekaj let kasneje, vsi
                    bežijo stran.</p>

                <p>Hkrati sem se pa kar nekaj naučil v vseh teh letih. Zakaj ne bi to znanje uporabil na nečem kar lahko
                    skupnost poveže na drugačen način.</p>

                <h2>Kako se tega lotiti?</h2>

                <p>Predvsem verjamem, da so ljudje tisti, ki skupaj ustvarjajo skupnost. Orodje, ki ne upošteva potrebe
                    in želja skupnosti, bo neuporabljeno in neuporabno. In tega si ne želim. </p>

                <p>Zato bo razvoj klele.si javen. Vse zapisano na tem blogu, in koda vidna na Githubu.</p>

                <p>Pa začnimo.</p>
            </div>
        </div>
    )
}