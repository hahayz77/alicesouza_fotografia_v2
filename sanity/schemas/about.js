export default {
  title: 'About',
  name: 'about',
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'About Image',
      description: "Upload a profile picture",
      options: { hotspot: true },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: "Title Text",
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description: "Description Text",
      validation: (Rule) => Rule.required()
    }
  ]
}