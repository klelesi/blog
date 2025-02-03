export default function Home() {
    return (
        <div className={'grid grid-cols-auto gap-6'}>
            <div>
                {page20250203()}
            </div>
            <div>
                {page20250202()}
            </div>
            </div>
    );
}

function page20250202() {
    return (
        <div className={'container prose'}>
            <div className="card">
                <p className={'text-sm'}>2. februar 2025, Miha Medven</p>

                <h1>Začetek številka dve</h1>

                <p>Zopet se srečava. Miha in nov projekt. Teh je bilo skozi leta več, od Youtube videov, masterclassov,
                    spletnega slovarja sopomenk in drugih.</p>

                <p>Tokrat bo projekt nova iteracija <a href="https://klele.si">Klele.si</a>.</p>

                <h2>Zgodovina</h2>

                <p>Leta 2021 sem bil med projekti. Bilo mi je dolgčas in hotel sem se naučiti novega frameworka. <a
                    href="https://nextjs.org/">NextJS</a> je takrat ravno popularen postajal, in sem rekel, da bi se ga
                    rad naučil. Zelo nerad se učim &quot;na suho&quot;, zato sem sem se že takrat odločil, da naredim klele.si.
                    Zmes Reddita in foruma, s pridihom Facebook skupine.</p>

                <p>Vse skupaj je trajalo kak mesec, da sem zgradil prvo različico. Uporabniki so se lahko registrirali,
                    objavljali prispevke/povezave, in komentirali. Čeprav je zadeva delovala, je nisem nikoli &quot;uradno&quot;
                    splavil. Prišli so novi projekti, motivacija je padla, predvsem pa dvom, da ljudje sploh potrebujejo
                    nekaj takega.</p>

                <p>Danes, štiri leta kasneje, se projekta lotevam ponovono. Tokrat malo bolj zares.</p>

                <h2>Kaj se je spremenilo?</h2>

                <p>Ne želim biti odvisen od drugih platform. Ne želim biti podvržen razvoju pri katerem nimam moč
                    vplivati na razvoj funkcionalnosti. Če pogledam Facebook skupino Slovenski developerji, se je ta v zadnjih letih razvila samo v številu članov, ne pa po kvaliteti
                    vsebine ali načinu povezovanja.</p>

                <p>Zato tudi ne želim uporabiti &quot;drugih&quot; platform, ker pridemo do enake težave. Podvržen si interesom
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

function page20250203() {
    return (
        <div className={'container prose'}>
            <div className="card">
                <p className={'text-sm'}>3. februar 2025, Miha Medven</p>

                <h1>Spoznavanje problemov</h1>

                <p>Vedno začneš na začetku. Zame je to dobro razumevanje problema. Šele ko dobro razumeš problem, ga lahko začneš reševati.</p>

                <h2>Problem #1: Facebook</h2>

                <p><a href="https://www.facebook.com/groups/developerji">Facebook skupina Slovenski developerji</a> šteje prek 18 tisoč članov. Od tega jih je dobrih 12 tisoč aktivnih.</p>

                <p>Velikokrat rečem, da se je ta skupnost razvila kljub temu, da gostujemo na Facebooku. Facebook ima svoje algoritme, ki določajo kaj člani vidimo, in česa ne. Velikokrat briše samovoljno objave brez kakršnegakoli obvestila avtorju, ali administratorjem.</p> <p>Orodja za upravljanje skupine se na mesečni ravni spreminjajo, in
                v osmih letih odkar sem administrator, nisem zabeležil nobene spremembe, ki bi mi pomagala pri upravljanju s skupnostjo. Skoraj dnevno se zgodi, da dobim sporočilo, da naj odobrim neko objavo, ker jo je Facebook samovoljno označil za neprimerno.
                </p>

                <h2>Problem #2: Pomanjkljive funkcionalnosti</h2>


                <p>Facebook kot orodje ima kar nekaj pomanjkljivosti:</p>
                <ul>
                    <li>nemogoče je iskati pretekle objave, saj se vsebina izgubi v poplavi drugih objav</li>
                    <li>nezanesljivo prikazovanje objav, saj se glede na algoritem nekatere objave večkrat pokažejo kot druge (in ne pomaga nastavitev za prikaz najnovejših objav)</li>
                    <li>orodja za boj proti spamu so neverjetno pomanjkljiva (večkrat nekaj označi kot spam kar v resnici ni, kot obratno)</li>
                    <li>ni prilagojeno specifikam naše skupnosti, saj so vse objave &quot;enake&quot; (objave za delo vs. meetup/dogodek vs. tehnična vsebina)</li>
                    <li>skupina je zasebna, tako da moraš biti uporabnik Facebooka kot tudi član skupine</li>
                </ul>

                <h2>Problem #3: Interes slovenske razvijalske skupnosti</h2>

                <p>Bodimo odkriti. Čeprav smo največja slovenska razvijalska skupnost, smo v celoti nepomembni za Facebook. Interesi skupnosti so v celoti nezastopani, ko pride do razvoja samega orodja.</p>

                <p>Pomembno je, da se specifike naše skupnosti tudi poznajo v samem orodju, saj nas te specifike delajo drugačne od vseh ostalih skupnosti.</p>

            </div>
        </div>
    )
}