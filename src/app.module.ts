import { Module } from '@nestjs/common';
import { ArquivoModule } from './Arquivo/arquivo.module';
import { ConcursoModule } from './Concurso/concurso.module';
import { CronogramaModule } from './Cronograma/cronograma.module';
import { CursoModule } from './Curso/curso.module';
import { EscolaModule } from './Escola/escola.module';
import { InscritoModule } from './Inscrito/inscrito.module';
import { InscritosConcursoModule } from './InscritosConcurso/inscritosconcurso.module';
import { MunicipioModule } from './Municipio/municipio.module';
import { MunicipiosAbrangentesModule } from './MunicipiosAbrangentes/municipiosabrangentes.module';
import { OfertanteModule } from './Ofertante/ofertante.module';
import { SeriesModule } from './Series/series.module';
import { SreModule } from './Sre/sre.module';
import { TiposConcursoModule } from './TiposConcurso/tiposconcurso.module';

@Module({
	imports: [
			ArquivoModule,
		ConcursoModule,
		CronogramaModule,
		CursoModule,
		EscolaModule,
		InscritoModule,
		InscritosConcursoModule,
		MunicipioModule,
		MunicipiosAbrangentesModule,
		OfertanteModule,
		SeriesModule,
		SreModule,
		TiposConcursoModule,
	],
	controllers: [],
	providers: [],
})

export class AppModule {}
