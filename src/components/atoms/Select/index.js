import _uniqueId from 'lodash/uniqueId'
import PropTypes from 'prop-types'
import React from 'react'
import { Icon } from '../icon'
import css from './Select.module.css'

export const Select = ({
  placeholder,
  stateInput,
  options,
  addClass,
  isLabelVisible = 'true',
  label,
  ...args
}) => {
  const name = _uniqueId('ui-name-')
  return (
    <label
      className={`${css.SelectWrapper} ${addClass}`}
      data-state={stateInput}
      {...args}
    >
      <span
        className={`${css['SelectLabel']} ${isLabelVisible ? '' : 'sr-only'}`}
      >
        {label}
      </span>
      <div className={css['SelectContainer']} data-state={stateInput}>
        <select
          defaultValue=''
          name={name}
          className={css.SelectStyle}
          data-state={stateInput}
        >
          <option disabled value=''>
            {placeholder}
          </option>
          {options.map((elem, i) => (
            <option key={i} value={i + 1}>
              {elem}
            </option>
          ))}
        </select>
        <div className={css.SelectAfter} data-state={stateInput}>
          <Icon nameIcon='arrow_drop_down' />
        </div>
      </div>
    </label>
  )
}

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  stateInput: PropTypes.string,
  options: PropTypes.array,
  addClass: PropTypes.string
}

Select.defaultProps = {
  placeholder: 'Choose option',
  options: ['Option 1', 'option 2'],
  addClass: '',
  isLabelVisible: false,
  label: 'Selecciona la opción'
}
