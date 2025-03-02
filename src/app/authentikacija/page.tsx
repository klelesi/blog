import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Auththentikacija | Klele.si Blog",
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
                <p className={'text-sm'}>2. marec 2025, Miha Medven</p>

                <h1>Auththentikacija</h1>

                <p>Od sedaj se lahko prijaviš. Trenutno podpiram le GitHub, ampak za začetek bo to dovolj.</p>

                <h2>Želiš stestirati?</h2>

                <p>Pojdi na <a href="https://test.klele.si/">test.klele.si</a>, in klikni na &rdquo;Prijava&rdquo;. S
                    klikom na GitHub greš čez njihov OAuth2 flow in v ozadju te prijavim v sistem. Vse skupaj deluje
                    prek <a
                        href="https://laravel.com/docs/12.x/sanctum">Laravel Sanctum</a>, tako da naj bi bilo
                    poskrbljeno tudi za varnost.</p>

                <div className="p-10">
                    <img src="/images/prijava.png" className={'w-full'} alt="Profilna stran"/>
                </div>

                <p>Takole zgleda profil.</p>

                <p>Otroci so zdravi, ampak sem si na breme nakopal nov projekt, ki ga moram izvesti pred klele.si.
                    Mogoče za teden ali dva dam na pavzo razvoj.</p>

            </div>
        </div>
    )
}