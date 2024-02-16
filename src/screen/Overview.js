function Overview(){
    let options = ["Project", "Project Manager", "Status"]
    let projHeadings = ["Name", "Project Manager", "Due date", "Status", "Progress"]
    let projData = [
        ["Nelsa Web Development", "Om Prakash Sao", "May 25, 2023", "Completed", "100%"],
        ["Data AI app", "Neilsan Mando", "June 20, 2023", "Delayed", "35%"],
        ["Media channel branding", "Tiruvelly Priya", "July 13, 2023", "At risk", "68%"],
        ["Corlax iOS App development", "Matte Hannery", "Dec 20, 2023", "Completed", "100%"]
    ]
    return (
        <div className="summary">
            <div className="nav">
                <div className="header">
                    <header>Project Summary</header>
                </div>
                <div className="option">
                    {options.map(opt =>
                        (<div className="projopt">{opt} &#11167;</div>)
                    )}
                </div>
            </div>
            
            <div className="projhead">
                {projHeadings.map(header =>
                    (<div className="heading">{header}</div> )
                )}
            </div>
            <div className="projdata">
                {projData.map(row =>
                    row.map(content =>
                        (
                            <div>
                                {(content===row[3] && content==="Completed") && <div className="status completed">{content}</div>}
                                {(content===row[3] && content==="Delayed") && <div className="status delayed">{content}</div>}
                                {(content===row[3] && content==="At risk") && <div className="status atrisk">{content}</div>}
                                
                                {(content!==row[3]) && <div>{content}</div>}
                            </div>
                        )
                ))}
            </div>

        </div>
    )
}

export default Overview;