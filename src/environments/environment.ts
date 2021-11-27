import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Webot',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44357',
    redirectUri: baseUrl,
    clientId: 'Webot_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone Webot',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44345',
      rootNamespace: 'Sky.Webot',
    },
  },
} as Environment;
