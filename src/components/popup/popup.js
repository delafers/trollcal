import React from "react"
import "./popup.css"

const ModalCreate = ({active, setActive, children},props) => {
    return(
        <div className={active ? "modal active" : "modal"} >
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
                <div>

                <textarea></textarea>
                </div>
                <div className={"buttons"}>
                    <span onClick={() => {setActive(false)}} className="close">Close</span>
                    <span onClick={() => {setActive(false)}} className="close">OK</span>
                </div>
            </div>
        </div>
    )
}

export default ModalCreate
