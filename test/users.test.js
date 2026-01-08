import { expect } from 'chai';
import app from '../index.js';
import request from 'supertest';

describe('GET /users', () => {
  it('should return a list of users', async () => {
    const res = await request(app).get('/users');

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.greaterThan(0);

    res.body.forEach((user) => {
      expect(user).to.have.property('id');
      expect(user).to.have.property('name');
      expect(user).to.have.property('role');
    });
  });
});
