import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Mesec kasneje | Klele.si Blog",
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
                <p className={'text-sm'}>21. april 2025, Miha Medven</p>

                <h1>Dva meseca kasneje</h1>

                <p>Skoraj dva meseca je minilo od zadnje objave. V tem času nisem počival, ampak pridno razvijal projekt, le objave nisem spisal.</p>

                <h2>Spremembe</h2>

                <p>Vrgel sem ven GitHub prijavo, ker sem želel uporabniku prijazno spletno stran. Sedaj se prijaviš z emailom in uporabniškim imenom. Prav tako zrihtal pozabljeno geslo.</p>

                <p>Zrihtal sem osnovna moderatorska orodja. Sedaj moderatorji lahko zaklenejo in izbrišejo komentarje in prispevke.</p>

                <p>Dodal sem možnost prijave vsebine, zato da lahko sami uporabniki (kot tudi neuporabniki) hitreje sporočijo moderatorju, da neka vsebina ne štima.</p>

                <p>Dodal sem ogromno enih mini UX popravkov, od boljših opisov napak ali pomanjkljivih pravic, prav tako dodal malo SEO bonbončekov, da ljudje ne bodo govorili, da je kovačeva kobila vedno bosa.</p>

                <p>Zadnja stvar, ki sem jo dodal, so še notifikacije, ki ti žmrgolijo, ko nekdo odgovori na tvoj komentar ali prispevek.</p>

                <h2>Kaj sledi?</h2>

                <p>Počasi se pripravljam, da začnem razmišljati o marketingu in promociji. A prej je treba narediti konkreten QA.</p>

            </div>
        </div>
    )
}