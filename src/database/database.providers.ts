import * as mongoose from 'mongoose';

const USER_BD = 'hotelporhoras';
const PASSWORD_BD = 'hotelporhoras';
const MONGODB_URI = `mongodb://${USER_BD}:${PASSWORD_BD}@ds247499.mlab.com:47499/hotelporhoras`;

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => {
            (mongoose as any).Promise = global.Promise;
            return await mongoose.connect(MONGODB_URI, {
                useMongoClient: true,
            });
        },
    },
];