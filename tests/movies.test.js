import { expect, test } from '@jest/globals';
import request from 'supertest';
import app from '../src/app';

test('Isle of dogs page shows correct title', async () => {
    const res = await request(app).get('/movies/1')
    .expect('content-Type', 'text/html; charset=utf-8')
    .expect(200);

    expect(res.text).toMatch('Isle of dogs');
});

test('Encanto page shows correct title', async () => {
    const res = await request(app).get('/movies/2')
    .expect('content-Type', 'text/html; charset=utf-8')
    .expect(200);

    expect(res.text).toMatch('Encanto');
});

test('The Shawshank Redemption page shows correct title', async () => {
    const res = await request(app).get('/movies/3')
    .expect('content-Type', 'text/html; charset=utf-8')
    .expect(200);

    expect(res.text).toMatch('The Shawshank Redemption');
});

test('Min granne Totoro page shows correct title', async () => {
    const res = await request(app).get('/movies/4')
    .expect('content-Type', 'text/html; charset=utf-8')
    .expect(200);

    expect(res.text).toMatch('Min granne Totoro');
});

test('The Muppets page shows correct title', async () => {
    const res = await request(app).get('/movies/5')
    .expect('content-Type', 'text/html; charset=utf-8')
    .expect(200);

    expect(res.text).toMatch('The Muppets');
});

test('Forrest Gump page shows correct title', async () => {
    const res = await request(app).get('/movies/6')
    .expect('content-Type', 'text/html; charset=utf-8')
    .expect(200);

    expect(res.text).toMatch('Forrest Gump');
});

test('Pulp Fiction page shows correct title', async () => {
    const res = await request(app).get('/movies/8')
    .expect('content-Type', 'text/html; charset=utf-8')
    .expect(200);

    expect(res.text).toMatch('Pulp Fiction');
});
