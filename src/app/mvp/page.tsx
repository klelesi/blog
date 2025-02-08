import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "MVP | Klele.si Blog",
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
                <p className={'text-sm'}>8. februar 2025, Miha Medven</p>

                <h1>MVP</h1>

                <p>Problem bojda razumem, sedaj ga moram začeti reševati.</p>

                <h2>Oblikovanje</h2>

                <p>Pred tremi leti sem že pobaral <a href="https://www.klemenc.si/">Nika Klemenca</a>, da mi je
                    pripravil oblikovanje za klele.si. Predlagal je retro stil, zato sva šla v retro stil.</p>

                <div className="p-2 bg-beige">
                    <a href="/images/klele-si-figma.png" target="_blank" rel="noopener noreferrer">
                        <img src="/images/klele-si-figma.png" alt="Klele.si Figma screenshot" className="w-full my-0"/>
                    </a>

                </div>

                <p>Osnovna funkcionalnost je podobna tisti iz Reddita, z nekaj dodatki, ki so bolj po meri slovenskem
                    razvijalskemu trgu. Tukaj imaš tudi na voljo <a
                        href="https://www.figma.com/design/sgJHNlnVsdZVq0twmX7kQ8/Klele?node-id=0-1&t=5pKYzSKTXAPpymVh-1">Figmo</a>,
                    kjer je Nik pripravil ogromno različnih komponent.</p>


                <h2>Kaj sedaj?</h2>

                <p>Tehnologijo že imam izbrano, Laravel na strežniku, Next.js za spletno stran.</p>

                <p>Najprej implementiram karseda majhno število funkcionalnosti; nato splavim; zatem nadgrajujem. Tako kot smo se učili v startupih.</p>

                <h3>Minimalne funkcionalnosti</h3>

                <ol>
                    <li>Prijava uporabnika (za začetek le prek obstoječih omrežij (Google, Github, Facebook))</li>
                    <li>Objava prispevkov</li>
                    <li>Komentiranje prispevkov</li>
                    <li>Obveščanje uporabnika glede aktivnosti</li>
                </ol>

                <p>Sedaj se moram <span className={'italic'}>samo</span> še lotiti programiranja.</p>
            </div>
        </div>
    )
}