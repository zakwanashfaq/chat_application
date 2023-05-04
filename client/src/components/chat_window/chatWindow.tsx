import { TChatWindowProps } from "../../types"

export default function ChatPage(params: any) {
    return <div className="mh-100 p-0 m-0">
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar bg-dark" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand">Real-time Chat Application</a>
                        <a className="navbar-brand ms-auto">Notification Components here</a>
                    </div>
                </nav>
            </div>
            <div className="row">
                <div className="col-3 px-0">
                    <SideBar />
                </div>
                <div className="col-9 px-0">
                    <div className="d-flex flex-row">
                        <div style={{ width: "5px", backgroundColor: "lightGrey" }}></div>
                        <ChatWindow roomID="sdsd" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

function ChatWindow(props: TChatWindowProps) {
    return <div className="d-flex flex-column w-100 vh-100">
        <Conversation />
        <div className="navbar sticky-bottom bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Input component here</a>
            </div>
        </div>
    </div>
}

function Conversation() {
    return <div className="overflow-auto">
        <div className="" style={{ backgroundColor: "grey", "height": "200px" }}></div>
        <div className="" style={{ backgroundColor: "lightgrey", "height": "300px" }}></div>
        <div className="" style={{ backgroundColor: "darkgrey", "height": "500px" }}></div>
        <div className="" style={{ backgroundColor: "green", "height": "200px" }}></div>
    </div>
}

function SideBar() {
    return <div className="d-flex vh-100 flex-column align-items-stretch flex-shrink-0 bg-body-tertiary">
        <a href="/" className="d-flex align-items-center flex-shrink-0 px-3 py-2 link-body-emphasis text-decoration-none border-bottom bg-success" data-bs-theme="dark">
            {/* <svg className="bi pe-none me-2" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg> */}
            <span className="fs-5 fw-semibold">All Coversations</span>
        </a>
        <div className="conversation-list overflow-auto">
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
    </div>
}