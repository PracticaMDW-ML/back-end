import { HotelController } from '../src/hotel/hotel.controller';
import { HotelService } from '../src/hotel/hotel.service';
import { HotelSchema } from '../src/hotel/hotel.schema';
import { Hotel } from '../src/hotel/hotel.interface';
import { expect } from 'chai';

describe('something', () => {
    const hotelService: HotelService = new HotelService(HotelSchema);
    const hotelController: HotelController = new HotelController(hotelService);
    it('should work', () => {
        // let hotel: Hotel;
        // hotel =  hotelService.findById('5ad7a1b15b87860488c0422c');
        expect('afsdg').to.equal(await hotelController.findOne('5ad7a1b15b87860488c0422c'));
    });
});