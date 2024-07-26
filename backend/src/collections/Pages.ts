import { Content } from  '../blocks/GalleryContent'
import { CollectionConfig } from 'payload/types'


export const Pages: CollectionConfig = {        
    slug: 'gallery-content',
    labels: {
        singular: 'Gallery Content',
        plural: 'Gallery Content'
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'section',
            label: 'Section',
            type: 'blocks',
            maxRows: 2,
            blocks: [
                Content,
            ]
        }
    ]
}