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
              <FollowSuggestion name="おおとろ" nickname="@outro1582" />,
              <FollowSuggestion
                name="おおとろ@エンジニア"
                nickname="@outro_web"
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
