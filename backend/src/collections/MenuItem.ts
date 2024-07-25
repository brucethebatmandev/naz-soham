import { CollectionConfig } from 'payload/types'

export const Item: CollectionConfig = {
    slug: 'menu-item',
    labels: {
        singular: 'Menu Item',
        plural: 'Menu Items',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            label: 'name'            
        },
        {
            name: 'description',
            type: 'textarea',
            required: false
        },
        {
            name: 'category',
            type: 'relationship',
            hasMany: false,
            relationTo: 'menu-category',
            required: true,
        }
    ],
    admin: {
        useAsTitle: 'name'
    }
}