import React from 'react';

import { Avatar, Container, FollowButton, Info } from './styles';

interface Props {
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined>フォロー</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
