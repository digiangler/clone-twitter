import React from 'react';

import ProfilePage from '../ProfilePage';
import {
  BackIcon,
  BellIcon,
  BottomMenu,
  Container,
  EmailIcon,
  Header,
  HomeIcon,
  ProfileInfo,
  SearchIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Digi-Angler</strong>
          <span>1万 ツイート</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
