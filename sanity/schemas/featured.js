export default {
    title: 'Featured',
    name: 'featured',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: "Title of the featured",
            validation: (Rule) => Rule.required()
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            description: "Upload 7 pictures and links",
            of: [
                {
                    type: 'object',
                    name: 'imageWithDescription',
                    title: 'Image with Description',
                    fields: [
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Image',
                            options: { hotspot: true },
                            validation: (Rule) => Rule.required()
                        },
                        {
                            name: 'link',
                            type: 'string',
                            title: 'Link',
                            description: "Link url",
                            validation: (Rule) => Rule.required()
                        },
                    ]
                }
            ],
            validation: (Rule) => Rule.required().min(7).max(7).error('You must provide 7 images.')
        },
    ],
}