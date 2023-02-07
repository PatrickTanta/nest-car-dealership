import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {
  constructor (
    private readonly carsService: CarsService
  ) {}

  @Get()
  getAllCars () {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCardById (@Param('id', ParseUUIDPipe) id: string) {

    return this.carsService.findCarById(id);
  }

  @Post()
  createCar (@Body() createCarDto: CreateCarDto) {
    return createCarDto;
  }

  @Patch(':id')
  updateCar (
    @Param('id', ParseIntPipe) id: string,
    @Body() body: any)
  {
    return body;
  }

  @Delete(':id')
  deleteCar (@Param('id', ParseIntPipe) id: string) {
    return {
      method: 'delete',
      id
    };
  }
}
