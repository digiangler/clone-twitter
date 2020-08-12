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
          元SIerでSEとして某メーカーの組み込みシステム開発や医療システムの開発を経験｜2011年、セールスライティングのスキルを学び、脱サラ、ライターになる｜2019年、SEの血が騒ぎ出しカムバック｜現在は最新の技術を学びながら、Webエンジニア・デザイナーとライターのフルスタックを楽しんでいます。無類のコーヒー好き☕️
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
            <strong>1,311</strong> フォロー中
          </span>
          <span>
            <strong>1,824</strong> フォロワー
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
