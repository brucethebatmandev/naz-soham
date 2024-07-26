import { Block } from "payload/types";

export const Content: Block = {
    slug: 'content',
    labels: {
        singular: 'Content Block',
        plural: 'Content Blocks'
    },
    fields: [
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
        },
        {
            name: 'subheading',
            label: 'Subheading',
            type: 'text',
        },
        {
            name: 'text',
            label: 'Text',
            type: 'textarea',
        },
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media'
        },
        {
            name: 'direction',
            label: 'Content Direction',
            type: 'select',
            required: true,
            options: [
                {
                    label: 'Text Left, Image Right',
                    value: 'default'
                },
                {
                    label: 'Image Left, Text Right',
                    value: 'reverse'
                }
            ]
        }
        
    ]
} 