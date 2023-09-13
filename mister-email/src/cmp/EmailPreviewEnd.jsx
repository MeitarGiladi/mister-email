import { EmailPreviewEndTime } from "./EmailPreviewEndTime"

export function EmailPreviewEnd({ email }) {

    function dummy(ev) { console.log("clicked ! ", ev) };  //dummy

    function toggleRead(email) {
        const updatedEmail = { ...email, isRead: !email.Read };
        CbUpdateEmail(updatedEmail);
    }

    return (
        <span className="email-preview-end">
            <EmailPreviewEndTime sentAt={email.sentAt} />
            <span className="email-preview-end-icons">
                <i className="preview-icon icon-archive" onClick={dummy}></i>
                <i className="preview-icon icon-delete" onClick={dummy}></i>
                <i className={"preview-icon " + (email.isRead ? "icon-mark-unread" : "icon-mark-read")} onClick={() => toggleRead(email)}></i>
                <i className="preview-icon icon-snooze" onClick={dummy}></i>
            </span>
        </span>
    )
}

