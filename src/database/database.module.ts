import {MongooseModule} from "@nestjs/mongoose";
import {Module} from "@nestjs/common";

const USER_BD = 'hotelporhoras';
const PASSWORD_BD = 'hotelporhoras';
const MONGODB_URI = `mongodb://${USER_BD}:${PASSWORD_BD}@ds247499.mlab.com:47499/hotelporhoras`;

@Module({
    imports: [MongooseModule.forRoot(MONGODB_URI)],
})
export class DatabaseModule {}