import React from 'react';

import Feed from '../Feed';
import {
  Avatar,
  Banner,
  CakeIcon,
  Container,
  EditButton,
  Followage,
  LocationIcon,
  ProfileData,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>プロフィールを編集</EditButton>

        <h1>Digi-Angler</h1>
        <h2>@digiangler</h2>

        <p>
          {/*Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>*/}
          TypeScript + React による Clone-Twitter です❗
        </p>

        <ul>
          <li>
            <LocationIcon />
            Tokyo, Japan
          </li>
          <li>
            <CakeIcon />
            誕生日: 2000年1月1日
          </li>
        </ul>

        <Followage>
          <span>
            <strong>1,234</strong> フォロー中
          </span>
          <span>
            <strong>5,678</strong> フォロワー
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
