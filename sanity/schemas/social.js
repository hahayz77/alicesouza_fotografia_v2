export default {
    title: 'Social',
    name: 'social',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: "Section title",
            validation: (Rule) => Rule.required()
        },
        {
            name: 'images',
            type: 'array',
            title: 'About Images',
            description: "Upload profile pictures",
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
                            description: "Description Text",
                            validation: (Rule) => Rule.required()
                        },
                    ]
                }
            ],
            validation: (Rule) => Rule.required()
        },
    ]
}