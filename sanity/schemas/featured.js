export default {
  title: 'Featured',
  name: 'featured',
  type: 'document',
  fields: [
    {
      name: 'link',
      type: 'string',
      title: 'Link',
      description: "Section Title",
      validation: (Rule) => Rule.required()
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
      description: "Ordem das imagens (direita para a esquerda, de cima para baixo)",
      validation: (Rule) => Rule.required().min(1).max(7)
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: "Select a image ",
      validation: (Rule) => Rule.required()
    }
  ],
}