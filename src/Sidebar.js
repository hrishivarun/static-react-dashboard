
function Sidebar(){
    let menu = ["Create new project", "Dashboard", "Projects", "Tasks", "Time log", "Users", "Project templates"];
    return (
        <div className="sidebar">
            <div className="header">
            <header>Promage</header>
            </div>

            <ul className="menu">
                {menu.map(option => 
                    (
                        <div className="option">
                            {(option===menu[0] || option===menu[1]) && <li className="selected">{option}</li>}
                            {(option!==menu[0] && option!==menu[1]) && <li>{option}</li>}
                        </div>
                    )
                 )}
            </ul>
        </div>
    )
}

export default Sidebar;