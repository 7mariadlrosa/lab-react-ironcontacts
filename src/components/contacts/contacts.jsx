import contacts from "../../contacts.json";
import { useState } from 'react'
const ContactsList = () => {

    const contactsCopy = [...contacts]
    const contactsSel = contactsCopy.slice(0, 5)
    const [contactList, setContactList] = useState(contactsSel)

    return (
        contactsSel.map(contacts => <ContactsList {...contacts} key={contacts._id} />)
    )
}

export default ContactsList
