import Link from 'next/link'
import Logo from "./logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";

export default function Navbar() {

    return (
        <>
            <nav className={'bg-white w-full border-b border-black px-3 flex flex-row justify-between items-center'}
                 role="navigation">
                <div className={'py-5 flex flex-row justify-between items-center w-full container'}>
                    <Link href="/"  className={'btn-logo flex flex-row items-baseline'}>
                        <Logo/> <span className="sans font-semibold ml-3 text-xl">blog</span>
                    </Link>

                    <Link href="https://github.com/klelesi/blog" className={'text-lg font-semibold ml-3 text-xl'}>
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                </div>
            </nav>
        </>
    )
}