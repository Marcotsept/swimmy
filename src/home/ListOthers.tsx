import { Divider, List, ListItem, ListItemText } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const ListOthers: FunctionComponent = () => {
  return (
    <List disablePadding>
      <Link to={'/'}>
        <ListItem button>
          <ListItemText primary={'ホーム'} />
        </ListItem>
      </Link>
      <Divider />
      <Link to={'/threads'}>
        <ListItem button>
          <ListItemText primary={'スレッド'} />
        </ListItem>
      </Link>
      <Divider />
      <Link to={'/images'}>
        <ListItem button>
          <ListItemText primary={'フォト'} />
        </ListItem>
      </Link>
      <Divider />
      <Link to={'/search'}>
        <ListItem button>
          <ListItemText primary={'探す'} />
        </ListItem>
      </Link>
      <Divider />
      <ListItem disabled>
        <ListItemText primary={'その他'} />
      </ListItem>
      <Divider />
    </List>
  )
}

export default ListOthers