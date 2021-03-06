import React from 'react';

const icons = {
  'angle-down': {
    path: (
      <path
        fill="currentColor"
        d="M12.5 6.5l-4.5 4.5-4.5-4.5 1-1 3.5 3.5 3.5-3.5 1 1z"
      />
    ),
    viewBox: '0 0 16 16',
  },
  'angle-left': {
    path: (
      <path
        fill="currentColor"
        d="M9.501 12.506l-4.499-4.506 4.488-4.494 1 1-3.49 3.494 3.501 3.506z"
      />
    ),
    viewBox: '0 0 16 16',
  },
  'angle-right': {
    path: (
      <path
        fill="currentColor"
        d="M6.501 12.5l-1-1 3.501-3.506-3.49-3.494 1-1 4.488 4.494z"
      />
    ),
    viewBox: '0 0 16 16',
  },
  'angle-up': {
    path: (
      <path
        fill="currentColor"
        d="M3.5 10l4.5-4.5 4.5 4.5-1 1-3.5-3.5-3.5 3.5-1-1z"
      />
    ),
    viewBox: '0 0 16 16',
  },
  'check': {
    path: (
      <path
        fill="currentColor"
        d="M6 11.060l-3-3-1 1 4 4 9-9-1-1z"
      />
    ),
    viewBox: '0 0 16 16',
  },
  'chevron-down': {
    path: (
      <path
        fill="currentColor"
        d="M8 12l-7-6.607 1.476-1.393 5.524 5.214 5.524-5.214 1.476 1.393z"
      />
    ),
    viewBox: '0 0 16 16',
  },
  'close': {
    path: (
      <path
        fill="currentColor"
        d="M15 2l-1-1-6 6-6-6-0.99 0.99 5.99 6.010-6 6 1 1 6-6 6 6 1-1-6-6 6-6z"
      />
    ),
    viewBox: '0 0 16 16',
  },
  'close-s': {
    path: (
      <path
        fill="currentColor"
        d="M9 8l4-4-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4z"
      />
    ),
    viewBox: '0 0 16 16',
  },
  'minus': {
    path: (
      <g fill="currentColor">
        <rect
          height="18"
          width="18"
          x="3"
          y="3"
        />
      </g>
    ),
  },
  'search-o': {
    path: (
      <path
        fill="currentColor"
        d="M16 14.59l-4.26-4.26c0.787-1.064 1.259-2.403 1.259-3.851 0-3.601-2.919-6.52-6.52-6.52s-6.52 2.919-6.52 6.52c0 3.601 2.919 6.52 6.52 6.52 1.449 0 2.787-0.472 3.869-1.271l-0.018 0.013 4.26 4.26zM6.5 11.5c-2.761 0-5-2.239-5-5s2.239-5 5-5c2.761 0 5 2.239 5 5v0c0 2.761-2.239 5-5 5v0z"
      />
    ),
    viewBox: '0 0 16 16',
  },
  'severity-success': {
    path: (
      <path
        fill="currentColor"
        d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8v0c0-4.418-3.582-8-8-8v0zM7 12l-4-4 1-1 3 3 5-6 1 1z"
      />
    ),
    viewBox: '0 0 16 16',
  },
  'severity-info': {
    path: (
      <path
        fill="currentColor"
        d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8v0c0-4.418-3.582-8-8-8v0zM7 4h2v2h-2zM10 12h-4v-1h1v-3h-1v-1h3v4h1z"
      />
    ),
    viewBox: '0 0 16 16',
  },
  'severity-warning': {
    path: (
      <path
        fill="currentColor"
        d="M15.86 13.49l-7-12c-0.176-0.3-0.498-0.498-0.865-0.498s-0.689 0.198-0.862 0.494l-0.003 0.005-7 12c-0.088 0.146-0.14 0.322-0.14 0.51 0 0.552 0.448 1 1 1 0.003 0 0.007-0 0.010-0h13.999c0.552-0 1-0.448 1-1 0-0.188-0.052-0.364-0.142-0.515l0.003 0.005zM9 13h-2v-2h2zM9 10h-2v-5h2z"
      />
    ),
    viewBox: '0 0 16 16',
  },
  'severity-error': {
    path: (
      <path
        fill="currentColor"
        d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8v0c0-4.418-3.582-8-8-8v0zM11 12l-3-3-3 3-1.060-1.060 3.060-2.94-3-3 1.060-1.070 2.94 2.95 2.94-2.94 1.060 1.060-2.89 3 3 3z"
      />
    ),
    viewBox: '0 0 16 16',
  },
  'spinner': {
    path: (
      <path
        fill="currentColor"
        d="M16 8c-0.001 4.417-3.582 7.998-8 7.998s-8-3.582-8-8c0-3.888 2.773-7.128 6.449-7.85l0.051-0.008v1.54c-2.889 0.702-5 3.267-5 6.325 0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-3.058-2.111-5.622-4.956-6.315l-0.044-0.009v-1.54c3.727 0.73 6.5 3.97 6.5 7.858 0 0.001 0 0.001 0 0.002v-0z"
      />
    ),
    viewBox: '0 0 16 16',
  },
};

export default icons;
