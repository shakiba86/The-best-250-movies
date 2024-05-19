export default function NavItemList({menuItem=[]}) {

    function renderMenu() {
            return menuItem.map(({id,title,link})=>{
                return(
                    <li key={id}>
                        <a href={link}>{title}</a>
                    </li>
                )
            })
    }
    return(
        <ul className="d-flex align-center justify-center">
            {renderMenu()}
        </ul>
    )
}