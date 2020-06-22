import * as httpCodes from 'http-status-codes';
import * as superTest from 'supertest';

import app from '../server';

const server = superTest(app);

describe('Server test', () => {
  describe('Get /api/images', () => {
    it('should respond with `application/json` and 200 status', (done) => {
      server
        .get('/api/images?q=test&limit=10&offset=1')
        .expect('Content-Type', /json/)
        .expect(httpCodes.OK, done);
    });

    it('should respond Bad request with bad limit and offset data', (done) => {
      server
        .get('/api/images?q=test&limit=badValue&offset=badValue')
        .responseType('string')
        .expect(httpCodes.BAD_REQUEST, done);
    });

    it('should respond Bad request with bad limit', (done) => {
      server
        .get('/api/images?q=test&limit=badValue&offset=1')
        .responseType('string')
        .expect(httpCodes.BAD_REQUEST, done);
    });

    it('should respond Bad request with bad offset', (done) => {
      server
        .get('/api/images?q=test&limit=10&offset=test')
        .responseType('string')
        .expect(httpCodes.BAD_REQUEST, done);
    });

    it('should respond Bad request with no params', (done) => {
      server
        .get('/api/images')
        .responseType('string')
        .expect(httpCodes.BAD_REQUEST, done);
    });

    it('should respond Bad request without query param', (done) => {
      server
        .get('/api/images?limit=10&offset=test')
        .responseType('string')
        .expect(httpCodes.BAD_REQUEST, done);
    });

    it('should respond Bad request without limit param', (done) => {
      server
        .get('/api/images?qyery=test&offset=test')
        .responseType('string')
        .expect(httpCodes.BAD_REQUEST, done);
    });

    it('should respond Bad request without offset param', (done) => {
      server
        .get('/api/images?query=test&limit=10')
        .responseType('string')
        .expect(httpCodes.BAD_REQUEST, done);
    });
  });
});
