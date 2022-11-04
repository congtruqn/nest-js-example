import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarmsModule } from './farms/farms.module';
import { CagesModule } from './cages/cages.module';
import { ParnsModule } from './barns/parns.module';
import { DatabaseModule } from './configs/database/database.module';
import { PensModule } from './pens/pens.module';
import { UploadModule } from './uploadfiles/uploadfile.module';
@Module({
  imports: [
    FarmsModule, CagesModule, ParnsModule,DatabaseModule, PensModule,UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
