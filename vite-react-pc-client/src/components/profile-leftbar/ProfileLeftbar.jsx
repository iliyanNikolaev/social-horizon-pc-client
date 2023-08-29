import './profile-leftbar.css'

import PostsList from '../posts-list/PostsList';
import ProfileUserInfo from '../profile-user-info/ProfileUserInfo';

import { posts } from '../../dummydata';

export default function ProfileLeftbar() {
  return (
    <div className="profile-leftbar">
      <div className="profile-leftbar-top">
        <ProfileUserInfo />
      </div>

      <hr />

      <div className="profile-left-bar-bottom">
        <PostsList posts={posts} />
      </div>
    </div>
  )
}
