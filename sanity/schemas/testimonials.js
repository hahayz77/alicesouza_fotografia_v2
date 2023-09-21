export default {
    title: 'Testimonials',
    name: 'testimonials',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            description: "Title (Name)",
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Testimonial text',
            name: 'text',
            type: 'string',
            description: "Testimonial text. (Max. 150 characters)",
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Profile',
            name: 'profile',
            type: 'image',
            options: { hotspot: true },
            description: "Profile Image",
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Print',
            name: 'print',
            type: 'image',
            options: { hotspot: true },
            description: "Print Image for",
            validation: (Rule) => Rule.required()
        }
    ],
}