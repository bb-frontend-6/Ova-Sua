import React from 'react'
import { InputAction } from './'
export default {
  title: 'Atoms/Input Action',
  component: InputAction,
  argTypes: {
    theme: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      defaultValue: 'primary',
      description: 'Aqui se puede escoger entre "primary" y "secondary" ',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    label: { table: { disable: true } },
    type: { table: { disable: true } },
    icon: { table: { disable: true } }
  }
}

const Template = (args) => <InputAction {...args} />
export const InputFile = Template.bind({})
InputFile.args = {
  type: 'file',
  label: 'Upload file',
  icon: 'upload'
}

export const InputColor = Template.bind({})
InputColor.args = {
  type: 'color',
  label: 'Select Color',
  icon: 'palette'
}
