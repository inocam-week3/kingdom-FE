import React from 'react'
import { StoriesTable } from './storyStyle'
import { FlexBox } from '../common'

export function StoriesTableBody( {onNavigate, id, title, username, viewCount, createdAt, liked }) {

  return (
    <StoriesTable
    key={id}
    $gtc="150px 1fr 100px 100px 100px 100px"
    $bottomLine="td"
  >
    <FlexBox>{id}</FlexBox>
    <FlexBox
      $jc="flex-start"
      style={{cursor:"pointer"}}
      onClick={onNavigate(`/story/${id}`)}
    >
      {title}
    </FlexBox>
    <FlexBox>{username}</FlexBox>
    <FlexBox>{createdAt.split("T")[0]}</FlexBox>
    <FlexBox>조회 {viewCount}</FlexBox>
    <FlexBox>좋아요 {liked}</FlexBox>
  </StoriesTable>
  )
}
