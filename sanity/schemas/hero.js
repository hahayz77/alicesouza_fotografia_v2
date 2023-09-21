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
    },
    {
      name: 'opacity',
      type: 'number',
      title: 'Opacity',
      description: "Opacity of the section, (default = 0.4)",
      default: 0.4,
      validation: (Rule) => Rule.required().min(0).max(1)
    }
  ]
}