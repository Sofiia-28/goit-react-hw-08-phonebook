import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import css from './Layout.module.css';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
