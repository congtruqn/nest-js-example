import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarmsModule } from './farms/farms.module';
import { CagesModule } from './cages/cages.module';
import { HousesModule } from './houses/houses.module';
import { DatabaseModule } from './configs/database/database.module';
@Module({
  imports: [
    FarmsModule, CagesModule, HousesModule,DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
