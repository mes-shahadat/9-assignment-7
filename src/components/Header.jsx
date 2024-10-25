import Nav from "./Nav";;

function Header({money, onClaim}) {

    
    return <header>
        <Nav money={money} />
    </header>
}

export default Header;