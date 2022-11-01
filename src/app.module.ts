import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarmsModule } from './farms/farms.module';
import { CagesModule } from './cages/cages.module';
import { HousesModule } from './houses/houses.module';
import { DatabaseModule } from './configs/database/database.module';
import { PensModule } from './pens/pens.module';
@Module({
  imports: [
    FarmsModule, CagesModule, HousesModule,DatabaseModule, PensModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
