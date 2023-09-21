export default {
  title: 'Hero',
  name: 'hero',
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Hero Image',
      description: "Upload a profile picture",
      options: { hotspot: true },
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