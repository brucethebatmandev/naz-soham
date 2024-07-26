import { CollectionConfig } from "payload/types";

export const ContactMessage: CollectionConfig = {
    slug: 'contact-message',
    access: {
        read: () => false,
        create: () => true,
        update: () => false,
        delete: () => false,
    },
    fields: [
        {
            name: 'firstName',
            type: 'text',
        },
        {
            name: 'lastName',
            type: 'text',
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'message',
            type: 'textarea',
            required: true,
        },

    ]
}