import React from 'react';

import Button from '../Button';
import {
  Avatar,
  BellIcon,
  Botside,
  Container,
  EmailIcon,
  ExitIcon,
  FavoriteIcon,
  HomeIcon,
  ListIcon,
  Logo,
  MenuButton,
  MoreIcon,
  ProfileData,
  ProfileIcon,
  SearchIcon,
  Topside,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>ホーム</span>
        </MenuButton>

        <MenuButton>
          <SearchIcon />
          <span>話題を検索</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>通知</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>メッセージ</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>ブックマーク</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>リスト</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>プロフィール</span>
        </MenuButton>

        <MenuButton>
          <MoreIcon />
          <span>もっと見る</span>
        </MenuButton>

        <Button>
          <span>ツイートする</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Digi-Angler</strong>
          <span>@digiangler</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
