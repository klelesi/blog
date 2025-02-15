import Link from "next/link";

export default function Home() {
    return (
        <div className={'grid grid-cols-auto gap-6'}>
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

                <h1>Začetek številka dve</h1>

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

                <h1>Spoznavanje problemov</h1>

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

                <h1>MVP</h1>

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

                <h1>API V1</h1>

                <p>Čeprav se je v delu vmešalo življenje (bolni otroci), mi je uspelo narediti napredek pri izdelavi
                    APIja.</p>

                <div className="mb-6 mt-12">
                    <Link href={{ pathname: "/api-v1"}}>Preberi več.</Link>
                </div>
            </div>
        </div>
    )
}