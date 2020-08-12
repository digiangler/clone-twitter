import React from 'react';
import StickyBox from 'react-sticky-box';

import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
import News from '../News';
import {
  Body,
  Container,
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="キーワード検索" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="おすすめツイート"
            elements={[
              <FollowSuggestion
                name="おおとろ@ライター"
                nickname="@***_writer"
              />,
              <FollowSuggestion
                name="おおとろ@エンジニア"
                nickname="@***_engineer"
              />,
              <FollowSuggestion name="コーヒー好き" nickname="@coffee_like" />,
            ]}
          />
          <List
            title="いまどうしてる？"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
