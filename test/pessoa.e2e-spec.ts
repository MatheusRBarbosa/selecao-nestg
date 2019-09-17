import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/pessoa (GET)', () => {
	throw('Not implemented yet !')
  });

  it('/pessoa/:id (GET)', () => {
	throw('Not implemented yet !')
  });

 it('/pessoa (POST)', () => {
	throw('Not implemented yet !')
 });
 
 it('/pessoa/:id (PUT)', () => {
 	throw('Not implemented yet !')
 });
 
 it('/pessoa/:id (DELETE)', () => {
 	throw('Not implemented yet !')
 });
 
});
