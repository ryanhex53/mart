import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { Product, ProductImage, ProductVariant } from './product/entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'RaeGiukuo3ueg3aevi5xohRu8aike3bi',
      database: 'test',
      entities: [Product, ProductVariant, ProductImage],
      synchronize: true,
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
