import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
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
    scope: 'offline_access Webot',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44345',
      rootNamespace: 'Sky.Webot',
    },
  },
} as Environment;
