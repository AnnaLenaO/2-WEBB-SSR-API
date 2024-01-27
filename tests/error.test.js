import { expect, test } from '@jest/globals';
import request from 'supertest';
import app from '../src/app';

describe('error', () => {
    test('Error page is shown', () => {
      request(app)
      .get('error')
      .expect(404);
    });
});
