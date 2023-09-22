export default {
    title: 'CTA',
    name: 'cta',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        description: "Title section",
        validation: (Rule) => Rule.required()
      },
      {
        name: 'button',
        type: 'string',
        title: 'Button',
        description: "Button Text",
        validation: (Rule) => Rule.required()
      },
    ]
  }