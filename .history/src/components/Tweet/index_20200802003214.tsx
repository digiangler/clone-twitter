import React from 'react';

import {
  Avatar,
  Body,
  CommentIcon,
  Container,
  Content,
  Description,
  Dot,
  Header,
  Icons,
  ImageContent,
  LikeIcon,
  Retweeted,
  RetweetIcon,
  RocketseatIcon,
  Status,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        固定されたツイート
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Digi-Angler</strong>
            <span>@digiangler</span>
            <Dot />
            <time>30分前</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>テストツイートです。</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              309
            </Status>
            <Status>
              <RetweetIcon />
              2.3万
            </Status>
            <Status>
              <LikeIcon />
              4.2万
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
