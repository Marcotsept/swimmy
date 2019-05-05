import { Card, CardContent, Typography, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { toDateText } from '../helpers/toDateText'
import { Post } from '../types/models/post'
import PostCounts from './PostCounts'

type Props = { post: Post }

const CardThread: FunctionComponent<Props> = ({ post }) => {
  const classes = useStyles({})

  return (
    <Link to={`/threads/${post.id}`}>
      <Card>
        <CardContent className={classes.root}>
          <PostCounts
            replyPostCount={post.replyPostCount}
            likeCount={post.likeCount}
          />
          <Typography className={classes.text} variant={'body2'}>
            {post.text}
          </Typography>
          <Typography color={'textSecondary'} variant={'caption'}>
            {toDateText(post.createdAt)}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

const useStyles = makeStyles<Theme>(({ typography, palette, spacing }) => {
  return {
    root: {
      display: 'grid',
      gridRowGap: `${spacing(1)}px`,
      width: `${100}%`
    },
    text: {
      fontSize: typography.pxToRem(16),
      fontWeight: typography.fontWeightMedium,
      whiteSpace: 'pre-line',
      wordBreak: 'break-all'
    }
  }
})

export default CardThread
