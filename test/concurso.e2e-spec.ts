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

  it('/concurso (GET)', () => {
	throw('Not implemented yet !')
  });

  it('/concurso/:id (GET)', () => {
	throw('Not implemented yet !')
  });

 it('/concurso (POST)', () => {
	throw('Not implemented yet !')
 });
 
 it('/concurso/:id (PUT)', () => {
 	throw('Not implemented yet !')
 });
 
 it('/concurso/:id (DELETE)', () => {
 	throw('Not implemented yet !')
 });
 
});
