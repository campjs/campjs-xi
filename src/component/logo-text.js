/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import useTransitionIn from 'util/use-transition-in';

const LogoText = ({ color = 'white', tin }) => {
  const [ref, transCss] = useTransitionIn(tin);
  return (
    <svg
      ref={ref}
      style={{ maxWidth: '402px' }}
      viewBox="0 0 402 235"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={theme => css`
        & > path[stroke-width] {
          @media (max-width: ${theme.breakpoints[1]}) {
            stroke-width: 2.5;
          }
          @media (max-width: ${theme.breakpoints[0]}) {
            stroke-width: 3;
          }
        }
        ${transCss}
      `}
    >
      <title>CAMP JS XI</title>
      <desc>The CampJS XI Logo (TextOnly)</desc>

      <path
        d="M74.7281 71.9613H92.7851C90.7907 81.5157 86.2019 88.9877 79.0328 94.4417L79.0281 94.4454C71.6588 100.122 62.1255 103 50.3462 103C40.4448 103 32.0048 100.878 24.9843 96.6803C17.9465 92.376 12.5295 86.4389 8.72496 78.8467C4.91806 71.1541 3 62.2614 3 52.1436C3 42.0247 4.91848 33.1313 8.72622 25.4381C12.5325 17.7478 17.9511 11.7638 24.9884 7.46089C32.0083 3.16864 40.4466 1 50.3462 1C62.1185 1 71.6471 3.97023 79.0158 9.83229L79.0157 9.83236L79.0266 9.84081C86.2047 15.3912 90.8048 23.1478 92.7961 33.1878H74.7386C73.3878 27.8943 70.6794 23.6831 66.599 20.6118C62.3943 17.279 56.8483 15.663 50.0618 15.663C40.6092 15.663 33.1053 18.9266 27.6768 25.5073C22.2712 32.0602 19.6275 40.9786 19.6275 52.1436C19.6275 63.3087 22.2712 72.2271 27.6768 78.78L27.6816 78.7858C33.112 85.269 40.6146 88.4807 50.0618 88.4807C56.835 88.4807 62.3703 87.0146 66.5728 83.9822L66.5763 83.9796C70.6509 81.0122 73.3685 76.9906 74.7281 71.9613Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M124.89 78.93H124.181L123.946 79.5984L115.961 102.32H97.1103L133.919 1.69995H154.33L191.1 102.32H172.113L164.275 79.6038L164.043 78.93H163.33H124.89Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M218.83 35.75V102.33H200.93V1.73995H222.413L253.916 64.4787L254.816 66.2706L255.706 64.4738L286.8 1.69995H308.28V102.32H290.38V35.75V31.5832L288.489 35.2961L261.717 87.86H247.493L220.721 35.2961L218.83 31.5832V35.75Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="4.2899"
      />
      <path
        d="M346.25 63.0599H345.25V64.0599V102.24H327.35V1.69995H364.45C372.516 1.69995 379.149 3.03372 384.438 5.71208C389.749 8.4015 393.667 12.1051 396.138 16.7126L396.142 16.7187C398.769 21.5366 400.097 26.9455 400 32.4323L400 32.4448L400 32.4573C400.038 37.7615 398.758 42.9983 396.276 47.6921C393.852 52.2718 389.949 56.038 384.708 58.838C379.507 61.6172 372.703 63.0599 364.45 63.0599H346.25Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M381.82 32.5321V32.53C381.82 27.4559 380.41 23.4853 377.487 20.5629C374.52 17.5954 369.673 16.22 363.32 16.22H346.25H345.25V17.22V47.7V48.7H346.25H363.32C369.682 48.7 374.53 47.325 377.488 44.3558L377.49 44.3544C380.387 41.4357 381.81 37.4195 381.82 32.5321Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M145.354 22.7497L144.406 20.0401L143.466 22.7525L129.866 61.9825L129.405 63.3101H130.811H158.141H159.55L159.084 61.9797L145.354 22.7497Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M33.2207 235C23.3807 235 15.5107 232.24 9.5707 226.71C3.6207 221.18 0.720703 213.25 0.720703 203.04H19.2007C19.2707 207.79 20.4007 211.55 22.5307 214.31C24.6507 217.07 28.0507 218.49 32.8007 218.49C37.2607 218.49 40.4507 217.14 42.5007 214.52C44.5507 211.9 45.5507 208.35 45.5507 204.03V132.1H64.0307V204.11C64.0307 214.03 61.2707 221.69 55.7407 227C50.2107 232.31 42.6307 235 33.2207 235ZM115.791 235C108.351 235 101.841 233.72 96.1707 231.17C90.7607 228.81 86.1107 225.01 82.7107 220.18C79.4507 215.43 77.7507 209.62 77.6807 202.75H97.1607C97.2607 207.23 99.0807 211.5 102.261 214.66C105.521 217.92 109.911 219.48 115.651 219.48C120.541 219.48 124.431 218.27 127.331 215.94C130.231 213.6 131.651 210.41 131.651 206.44C131.651 202.33 130.381 199.07 127.831 196.73C125.281 194.39 121.881 192.55 117.631 191.06C113.381 189.57 108.851 188.08 104.031 186.45C96.2407 183.76 90.2907 180.28 86.1807 176.03C82.0707 171.78 80.0207 166.18 80.0207 159.09C79.9507 153.14 81.3707 147.96 84.2707 143.71C87.3107 139.35 91.4707 135.9 96.3107 133.72C101.861 131.28 107.881 130.07 113.941 130.18C120.671 130.18 126.621 131.38 131.791 133.79C136.691 135.98 140.881 139.49 143.901 143.92C146.921 148.51 148.541 153.88 148.571 159.37H128.811C128.711 155.79 127.241 152.4 124.701 149.87C122.081 147.11 118.401 145.76 113.651 145.76C109.611 145.69 106.211 146.68 103.451 148.74C100.691 150.8 99.3407 153.84 99.3407 157.74C99.3407 161.14 100.401 163.76 102.531 165.75C105.061 167.95 107.991 169.64 111.171 170.71C114.851 172.06 119.031 173.47 123.701 175.03C128.461 176.63 133.061 178.67 137.441 181.13C141.451 183.37 144.871 186.53 147.431 190.34C149.911 194.17 151.181 199.06 151.181 205.01C151.211 210.2 149.811 215.3 147.141 219.75C144.451 224.29 140.411 227.9 135.171 230.66C130.031 233.65 123.511 235 115.791 235ZM166.571 235L186.821 202.26L166.281 170.23H179.881L194.401 192.84L207.711 170.23H221.031L200.781 202.76L221.461 234.94H207.861L193.131 212.12L179.891 235H166.571Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoText;
