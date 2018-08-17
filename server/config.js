/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Forge Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

'use strict'; // http://www.w3schools.com/js/js_strict.asp

module.exports = {

  // Autodesk Forge configuration

  // this this callback URL when creating your client ID and secret
  callbackURL: process.env.FORGE_CALLBACK_URL || 'http://localhost:3000/api/forge/callback/oauth',

  // set enviroment variables or hard-code here
  credentials: {
    client_id: process.env.FORGE_CLIENT_ID || 'fPPo2GEvqhZv180UrgGSQAwMTgY9ZLtB',
    client_secret: process.env.FORGE_CLIENT_SECRET || 'AaQzZEQscUDA1PRF',
  },

  // Required scopes for your application on server-side
  scopeInternal: ['data:read', 'data:write', 'data:create', 'data:search', 'bucket:create', 'bucket:read', 'bucket:update', 'bucket:delete'],
  // Required scope of the token sent to the client
  scopePublic: ['viewables:read'],

  // BOX configuration
  box: {
    callbackURL: process.env.BOX_CALLBACK_URL || 'http://localhost:3000/api/box/callback/oauth',
    credentials: {
      client_id: process.env.BOX_CLIENT_ID || 'pspbm09xtmgwrktw50hbwd6sarvda35k',
      client_secret: process.env.BOX_CLIENT_SECRET || 'oLaPF6mwdroRbmldlWxjGiKtkzNB99XN'
    }
  }
};
