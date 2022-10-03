import { Module, Global } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
/*Register Product controller in app module */
import { ProductController } from './products.controller';
import { db } from './orm.config';
import { ProductService } from './providers';
import { Product } from './models';

@Global() /*Marking the App module Global Scope */
@Module({
  imports: [
    TypeOrmModule.forRoot(db),
    TypeOrmModule.forFeature([Product]),
    AdminModule,
  ],
  controllers: [AppController, ProductController],
  providers: [ProductService],
  exports: [ProductService],
})

/**
 * AppModule registered the AppController and ProductsController as controllers.
 * So, all the providers defined in the AppModule will be available to be injected in the AppController and ProductsController when they are needed.
 */
export class AppModule {}
