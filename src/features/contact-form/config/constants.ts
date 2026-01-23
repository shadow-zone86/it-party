import { ContactFormField } from '../model/types'

export const DEFAULT_FIELDS: ContactFormField[] = [
  {
    name: 'name',
    label: 'Ваше имя',
    type: 'text',
    placeholder: 'Введите ваше имя',
    required: true,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'example@mail.com',
    required: true,
  },
  {
    name: 'message',
    label: 'Сообщение',
    type: 'textarea',
    placeholder: 'Расскажите о вашем проекте...',
    required: true,
  },
]
