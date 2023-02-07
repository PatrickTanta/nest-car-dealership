import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function main() {
    const app = await NestFactory.create(AppModule)

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // removes garbage data from the request body
            forbidNonWhitelisted: true // throws an error if the request body contains garbage data
        })
    )

    await app.listen(3000)
}
main()
