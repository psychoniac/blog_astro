import Navbar from "./Navbar"

export default function Header({ title }) {

    return (
        <header>
            <Navbar />
            <h1>{title}</h1>
        </header>
    )
}