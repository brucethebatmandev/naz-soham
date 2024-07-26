import { CollectionConfig } from "payload/types";

export const OpeningHours: CollectionConfig = {
    slug: 'opening-hours',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'type',
            type: 'select',
            required: true,
            hasMany: false,
            options: [
                {
                    label: 'Mon',
                    value: 'Mon',
                },
                {
                    label: 'Tue',
                    value: 'Tue',
                },
                {
                    label: 'Wed',
                    value: 'Wed',
                },
                {
                    label: 'Thu',
                    value: 'Thu',
                },
                {
                    label: 'Fri',
                    value: 'Fri',
                },
                {
                    label: 'Sat',
                    value: 'Sat',
                },
                {
                    label: 'Sun',
                    value: 'Sun',
                },

            ]
        },

        {
            name: 'openingTime',
            type: 'text',
            required: true,
        },
        {
            name: 'closingTime',
            type: 'text',
            required: true,
        },

    ]
}