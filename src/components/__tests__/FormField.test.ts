import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormField from '../FormField.vue'

describe('FormField Component', () => {
  it('should render label when provided', () => {
    const wrapper = mount(FormField, {
      props: {
        label: 'Email',
      },
      slots: {
        default: '<input type="text" />',
      },
    })

    expect(wrapper.text()).toContain('Email')
  })

  it('should display error message when errorMessage prop is provided', () => {
    const wrapper = mount(FormField, {
      props: {
        label: 'Email',
        errorMessage: 'Email is required',
      },
      slots: {
        default: '<input type="text" />',
      },
    })

    expect(wrapper.text()).toContain('Email is required')
  })

  it('should show required indicator when required prop is true', () => {
    const wrapper = mount(FormField, {
      props: {
        label: 'Email',
        required: true,
      },
      slots: {
        default: '<input type="text" />',
      },
    })

    expect(wrapper.text()).toContain('*')
  })

  it('should display helper text when provided', () => {
    const wrapper = mount(FormField, {
      props: {
        label: 'Email',
        helperText: 'Enter your email address',
      },
      slots: {
        default: '<input type="text" />',
      },
    })

    expect(wrapper.text()).toContain('Enter your email address')
  })

  it('should display success message when provided', () => {
    const wrapper = mount(FormField, {
      props: {
        label: 'Email',
        successMessage: 'Email is valid',
      },
      slots: {
        default: '<input type="text" />',
      },
    })

    expect(wrapper.text()).toContain('Email is valid')
  })

  it('should not show helper text when error is present', () => {
    const wrapper = mount(FormField, {
      props: {
        label: 'Email',
        errorMessage: 'Email is required',
        helperText: 'Enter your email address',
      },
      slots: {
        default: '<input type="text" />',
      },
    })

    expect(wrapper.text()).not.toContain('Enter your email address')
    expect(wrapper.text()).toContain('Email is required')
  })

  it('should render slot content', () => {
    const wrapper = mount(FormField, {
      props: {
        label: 'Email',
      },
      slots: {
        default: '<input type="email" id="email-input" />',
      },
    })

    const input = wrapper.find('#email-input')
    expect(input.exists()).toBe(true)
    expect(input.attributes('type')).toBe('email')
  })
})

