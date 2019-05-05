import { makeStyles } from '@material-ui/styles'
import React, { FunctionComponent } from 'react'
import { Theme } from '@material-ui/core'

type Props = {
  inputRef: any
  onChange: any
}

const InputFile: FunctionComponent<Props> = ({ inputRef, onChange }) => {
  const classes = useStyles({})

  return (
    <input
      accept={'image/*'}
      className={classes.root}
      onChange={onChange}
      ref={inputRef}
      type={'file'}
    />
  )
}

const useStyles = makeStyles<Theme>({ root: { display: 'none' } })

export default InputFile
