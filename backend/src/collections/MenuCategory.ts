import { CollectionConfig } from 'payload/types'

export const Category: CollectionConfig = {
    slug: 'menu-category',
    labels: {
        singular: 'Menu Category',
        plural: 'Menu Categories',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,        
        },
    ],
    admin: {
        useAsTitle: 'name'
    }
}

