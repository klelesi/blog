import Link from "next/link";

export default function Home() {
    return (
        <div className={'grid grid-cols-auto gap-6'}>
            <div>
                {page7()}
            </div>
            <div>
                {page6()}
            </div>
            <div>
                {page5()}
            </div>
            <div>
                {page4()}
            </div>
            <div>
                {page3()}
            </div>
            <div>
                {page2()}
            </div>
            <div>
                {page1()}
            </div>
            </div>
    );
}

function page1() {
    return (
        <div className={'container prose'}>


            <div className="card">
                <p className={'text-sm'}>2. februar 2025, Miha Medven</p>

                <h2>Začetek številka dve</h2>

                <p>Zopet se srečava. Miha in nov projekt. Teh je bilo skozi leta več, od Youtube videov, masterclassov,
                    spletnega slovarja sopomenk in drugih.</p>

                <p>Tokrat bo projekt nova iteracija <a href="https://klele.si">Klele.si</a>.</p>


                <div className="mb-6 mt-12">
                    <Link href={{ pathname: "/zacetek-stevilka-dve"}}>Preberi več.</Link>
                </div>
            </div>
        </div>
    )
}

function page2() {
    return (
        <div className={'container prose'}>
            <div className="card">
                <p className={'text-sm'}>3. februar 2025, Miha Medven</p>

                <h2>Spoznavanje problemov</h2>

                <p>Vedno začneš na začetku. Zame je to dobro razumevanje problema. Šele ko dobro razumeš problem, ga lahko začneš reševati.</p>

                <div className="mb-6 mt-12">
                    <Link href={{ pathname: "/spoznavanje-problemov"}}>Preberi več.</Link>
                </div>
            </div>
        </div>
    )
}

function page3() {
    return (
        <div className={'container prose'}>
            <div className="card">
                <p className={'text-sm'}>8. februar 2025, Miha Medven</p>

                <h2>MVP</h2>

                <p>Problem bojda razumem, sedaj ga moram začeti reševati.</p>

                <div className="mb-6 mt-12">
                    <Link href={{ pathname: "/mvp"}}>Preberi več.</Link>
                </div>
            </div>
        </div>
    )
}

function page4() {
    return (
        <div className={'container prose'}>
            <div className="card">
                <p className={'text-sm'}>15. februar 2025, Miha Medven</p>

                <h2>API V1</h2>

                <p>Čeprav se je v delu vmešalo življenje (bolni otroci), mi je uspelo narediti napredek pri izdelavi
                    APIja.</p>

                <div className="mb-6 mt-12">
                    <Link href={{ pathname: "/api-v1"}}>Preberi več.</Link>
                </div>
            </div>
        </div>
    )
}
function page5() {
    return (
        <div className={'container prose'}>
            <div className="card">
                <p className={'text-sm'}>23. februar 2025, Miha Medven</p>

                <h2>Testna različica na test.klele.si</h2>

                <p>Imel sem srečo. Otroci so bili zdravi in imel sem dovolj energije za programiranje. Sem tudi
                    razmislil kako bi rad zapeljal projekt.</p>

                <div className="mb-6 mt-12">
                    <Link href={{ pathname: "/testna-razlicica"}}>Preberi več.</Link>
                </div>
            </div>
        </div>
    )
}

function page6() {
    return (
        <div className={'container prose'}>
            <div className="card">
                <p className={'text-sm'}>2. marec 2025, Miha Medven</p>

                <h2>Auththentikacija</h2>

                <p>Od sedaj se lahko prijaviš. Trenutno podpiram le GitHub, ampak za začetek bo to dovolj.</p>

                <div className="mb-6 mt-12">
                    <Link href={{ pathname: "/authentikacija"}}>Preberi več.</Link>
                </div>
            </div>
        </div>
    )
}

function page7() {
    return (
        <div className={'container prose'}>
            <div className="card">
                <p className={'text-sm'}>21. april 2025, Miha Medven</p>

                <h2>Dva meseca kasneje</h2>

                <p>Skoraj dva meseca je minilo od zadnje objave. V tem času nisem počival, ampak pridno razvijal projekt, le objave nisem spisal.</p>

                <div className="mb-6 mt-12">
                    <Link href={{ pathname: "/dva-meseca-kasneje"}}>Preberi več.</Link>
                </div>
            </div>
        </div>
    )
}
