import { CollectionConfig } from "payload/types";

export const Contact: CollectionConfig = {
    slug: 'contact',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'value',
            type: 'text',
            required: true,
        },
        {
            name: 'type',
            type: 'select',
            required: true,
            hasMany: false,
            options: [
                {
                    label: 'Phone',
                    value: 'phone',
                },
                {
                    label: 'Email',
                    value: 'email',
                },
                {
                    label: 'Address',
                    value: 'address',
                },
            ]
        },
    ]
}