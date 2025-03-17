import 'dotenv/config';
import {
  ClassSerializerInterceptor,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import validationOptions from './utils/validation-options';
import { AllConfigType } from './config/config.type';
import { ResolvePromisesInterceptor } from './utils/serializer.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const configService = app.get(ConfigService<AllConfigType>);
  const port = configService.getOrThrow('app.port', { infer: true });

  // Global Prefix
  app.enableShutdownHooks();
  app.setGlobalPrefix(
    configService.getOrThrow('app.apiPrefix', { infer: true }),
    {
      exclude: ['/'],
    },
  );
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // Global Pipes & Interceptors
  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.useGlobalInterceptors(
    new ResolvePromisesInterceptor(),
    new ClassSerializerInterceptor(app.get(Reflector)),
  );

  // ✅ Swagger API Documentation Setup
  const options = new DocumentBuilder()
    .setTitle('Tasks API')
    .setDescription(
      'API for managing tasks, task history, and soft deletion. \n\nUse the endpoints below to interact with the system.',
    )
    .setVersion('1.0')
    .addTag('tasks', 'Endpoints related to tasks management')
    .addBearerAuth() // Adds JWT authentication to Swagger UI
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // Keeps auth tokens saved
    },
  });

  await app.listen(port);
  console.log(`🚀 Server running at http://localhost:${port}`);
  console.log(`📄 Swagger API Docs available at http://localhost:${port}/docs`);
}
void bootstrap();
