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

  it('/tiposconcurso (GET)', () => {
	throw('Not implemented yet !')
  });

  it('/tiposconcurso/:id (GET)', () => {
	throw('Not implemented yet !')
  });

 it('/tiposconcurso (POST)', () => {
	throw('Not implemented yet !')
 });
 
 it('/tiposconcurso/:id (PUT)', () => {
 	throw('Not implemented yet !')
 });
 
 it('/tiposconcurso/:id (DELETE)', () => {
 	throw('Not implemented yet !')
 });
 
});
