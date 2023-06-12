import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { ValidationPipe } from "./pipes/validation.pipe";

async function start() {
    const PORT = process.env.PORT || 3001;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle("NestJS")
        .setDescription("First NestJS app")
        .setVersion("1.0.0")
        .addTag("RIXY")
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/api/docs", app, document);
    // app.useGlobalGuards(JwtAuthGuard); передача глобального гуарда
    app.useGlobalPipes(new ValidationPipe()); // вызов глобального пайпа

    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

start();
