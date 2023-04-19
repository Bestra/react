import React from 'react'
import {Story, Meta} from '@storybook/react'
import {EyeClosedIcon, EyeIcon, SearchIcon, TriangleDownIcon, XIcon, HeartIcon} from '@primer/octicons-react'
import {Button} from '.'
import {OcticonArgType} from '../utils/story-helpers'

export default {
  title: 'Drafts/Components/Button',
  argTypes: {
    size: {
      control: {type: 'radio'},
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: {type: 'boolean'},
    },
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'primary', 'danger', 'invisible', 'outline'],
      },
    },
    alignContent: {
      control: {
        type: 'radio',
        options: ['center', 'start'],
      },
    },
    block: {
      control: {type: 'boolean'},
    },
    leadingIcon: OcticonArgType([EyeClosedIcon, EyeIcon, SearchIcon, XIcon, HeartIcon]),
    trailingIcon: OcticonArgType([EyeClosedIcon, EyeIcon, SearchIcon, XIcon, HeartIcon]),
    trailingAction: OcticonArgType([TriangleDownIcon]),
    trailingVisualCount: {
      control: {type: 'number'},
    },
  },
  args: {
    block: false,
    size: 'medium',
    disabled: false,
    variant: 'default',
    alignContent: 'center',
  },
} as Meta<typeof Button>

export const Playground: Story<typeof Button & {trailingVisualCount: number}> = args => {
  const {trailingVisualCount, ...rest} = args
  return (
    <Button {...rest}>
      Default{' '}
      {typeof trailingVisualCount === 'undefined' ? null : <Button.Counter>{trailingVisualCount}</Button.Counter>}
    </Button>
  )
}

export const Default = () => <Button>Default</Button>