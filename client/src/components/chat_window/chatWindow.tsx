import { TChatWindowProps } from "../../types"

export default function ChatPage(params: any) {
    return <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 px-0">
                    <SideBar />
                </div>
                <div className="col-9 px-0">
                    <ChatWindow roomID="sdsd" />
                </div>
            </div>
        </div>
    </div>
}

function ChatWindow(props: TChatWindowProps) {
    return <div className="d-flex flex-column vh-100">
        <nav className="navbar sticky-top bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" >Fixed top</a>
            </div>
        </nav>
        <Conversation />
        <div className="navbar sticky-bottom bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Sticky bottom</a>
            </div>
        </div>
    </div>
}

function Conversation(){
    return <div  className="overflow-auto flex-grow-1">
        <div className="" style={{ backgroundColor: "grey", "height": "200px"}}></div>
        <div className="" style={{ backgroundColor: "red", "height": "300px"}}></div>
        <div className="" style={{ backgroundColor: "yellow", "height": "500px"}}></div>
        <div className="" style={{ backgroundColor: "green", "height": "200px"}}></div>
    </div>
}

function SideBar() {
    return <div className="d-flex flex-column vh-100 overflow-auto align-items-stretch flex-shrink-0 bg-body-tertiary">
        <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
            <svg className="bi pe-none me-2" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
            <span className="fs-5 fw-semibold">Coversations</span>
        </a>
        <div className="list-group list-group-flush border-bottom scrollarea">
            <a href="#" className="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small>Wed</small>
                </div>
                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small className="text-body-secondary">Tues</small>
                </div>
                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small className="text-body-secondary">Mon</small>
                </div>
                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>

            <a href="#" className="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small className="text-body-secondary">Wed</small>
                </div>
                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small className="text-body-secondary">Tues</small>
                </div>
                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small className="text-body-secondary">Mon</small>
                </div>
                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" className="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small className="text-body-secondary">Wed</small>
                </div>
                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small className="text-body-secondary">Tues</small>
                </div>
                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small className="text-body-secondary">Mon</small>
                </div>
                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" className="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small className="text-body-secondary">Wed</small>
                </div>
                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small className="text-body-secondary">Tues</small>
                </div>
                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small className="text-body-secondary">Mon</small>
                </div>
                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
        </div>
    </div>
}