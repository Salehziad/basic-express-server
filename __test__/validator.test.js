'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('ss', () => {

    test('vv', async () => {
        const response = await request.get('/person?name=name');
        expect(response.status).toEqual(200);
        expect(response.body).toEqual({"name": "name"})
    })
})