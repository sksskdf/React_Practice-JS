import React from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  return (
    <SideNav>
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            <Link to={'/login'}>로그인</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
            <i
              className="fa fa-fw fa-line-chart"
              style={{ fontSize: '1.75em' }}
            />
          </NavIcon>
          <NavText>게시판</NavText>
          <NavItem eventKey="charts/linechart">
            <NavText>
              <Link
                to="/form"
                style={{
                  textDecoration: 'none',
                  color: '#f9dcdd',
                }}
              >
                게시글 등록
              </Link>
            </NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default Sidenav;
