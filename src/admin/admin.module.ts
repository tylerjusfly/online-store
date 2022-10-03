import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminProductController } from './admin.products.controller';

@Module({
  controllers: [AdminController, AdminProductController],
})
export class AdminModule {}

//register Admin module in the app Module
