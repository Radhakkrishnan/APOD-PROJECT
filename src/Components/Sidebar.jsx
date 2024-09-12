export default function Sidebar(props){
    const {showModal, data} = props
    return(
        <div className="sidebar">
            <div className="bgOverlay" ></div>
            <div className="sidebarContents">
                <h2>{data.title} </h2>
                <div>
                    <p className="description">{data.date}</p>
                    <p>{data.explanation}</p>
                </div>
                <button className="btn" onClick={showModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}