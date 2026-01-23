export interface ContactFormField {
  name: string
  label: string
  type: 'text' | 'email' | 'textarea'
  placeholder?: string
  required?: boolean
}
